"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Send, Bot, User, Loader2, Paperclip, Mic } from "lucide-react";
import { toast } from "sonner";
import { useChatContext } from "@/contexts/chat-context";
import { Message, ChatStorage } from "@/lib/chat-storage";

export function ChatInterface() {
  const { currentSession, addMessage, updateCurrentSession, createNewSession } = useChatContext();
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shouldAutoScroll, setShouldAutoScroll] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Create a new session if none exists
  useEffect(() => {
    if (!currentSession) {
      createNewSession();
    }
  }, [currentSession, createNewSession]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (shouldAutoScroll) {
      scrollToBottom();
      setShouldAutoScroll(false);
    }
  }, [currentSession?.messages, shouldAutoScroll]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !currentSession) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    addMessage(userMessage);
    setInput("");
    setIsLoading(true);
    setShouldAutoScroll(true);

    const assistantMessageId = (Date.now() + 1).toString();
    const assistantMessage: Message = {
      id: assistantMessageId,
      role: 'assistant',
      content: '',
      timestamp: new Date()
    };

    // We need to get the updated session after adding messages
    const sessionAfterUserMessage = ChatStorage.getSession(currentSession.id);
    if (!sessionAfterUserMessage) return;

    // Add the assistant message
    const sessionWithAssistantMessage = {
      ...sessionAfterUserMessage,
      messages: [...sessionAfterUserMessage.messages, assistantMessage],
      updatedAt: new Date()
    };
    updateCurrentSession(sessionWithAssistantMessage);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: sessionAfterUserMessage.messages.map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || 'Failed to get response');
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let accumulatedContent = '';

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value);
          const lines = chunk.split('\n');

          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = line.slice(6).trim();
              if (data === '[DONE]') {
                setIsLoading(false);
                setShouldAutoScroll(true);
                return;
              }

              try {
                const parsed = JSON.parse(data);
                if (parsed.content) {
                  accumulatedContent += parsed.content;
                  
                  // Get the latest session state and update it
                  const latestSession = ChatStorage.getSession(currentSession.id);
                  if (latestSession) {
                    const updatedSession = {
                      ...latestSession,
                      messages: latestSession.messages.map(msg => 
                        msg.id === assistantMessageId 
                          ? { ...msg, content: accumulatedContent }
                          : msg
                      ),
                      updatedAt: new Date()
                    };
                    updateCurrentSession(updatedSession);
                    setShouldAutoScroll(true);
                  }
                }
              } catch (parseError) {
                console.warn('Failed to parse streaming data:', parseError);
              }
            }
          }
        }
      }
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message';
      toast.error(errorMessage);
      console.error('Chat error:', error);
      
      // Remove the empty assistant message on error
      const latestSession = ChatStorage.getSession(currentSession.id);
      if (latestSession) {
        const updatedSession = {
          ...latestSession,
          messages: latestSession.messages.filter(msg => msg.id !== assistantMessageId),
          updatedAt: new Date()
        };
        updateCurrentSession(updatedSession);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const messages = currentSession?.messages || [];

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto">
        {messages.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <div className="text-center max-w-2xl px-4">
              <div className="mb-8">
                <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">KIMI</h1>
                <p className="text-muted-foreground text-lg">Ask me anything...</p>
              </div>
              
              {/* Quick Actions */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
                {[
                  "Write a bubble sort function",
                  "Explain quantum computing principles",
                  "Help me write a work summary",
                  "What are JavaScript closures?",
                  "Recommend resources for learning programming",
                  "How to improve code quality?"
                ].map((prompt, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-3 text-sm bg-muted hover:bg-muted/80 rounded-lg transition-colors text-left"
                    onClick={() => {
                      setInput(prompt);
                      inputRef.current?.focus();
                    }}
                  >
                    {prompt}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 space-y-4 max-w-4xl mx-auto">
            <AnimatePresence>
              {messages.filter(message => !(message.role === 'assistant' && message.content === '')).map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                      message.role === 'user'
                        ? 'bg-primary text-primary-foreground ml-auto'
                        : 'bg-muted'
                    }`}
                  >
                    <span className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                      {message.role === 'assistant' && isLoading && message.content && (
                        <span className="inline-block w-2 h-4 bg-primary/60 ml-1 animate-pulse" />
                      )}
                    </span>
                  </div>

                  {message.role === 'user' && (
                    <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    </div>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>

            {isLoading && messages[messages.length - 1]?.content === '' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-primary" />
                </div>
                <div className="bg-muted rounded-2xl px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm text-muted-foreground">
                      Kimi is thinking...
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="border-t bg-background/95 backdrop-blur">
        <div className="max-w-4xl mx-auto p-4">
          <form onSubmit={handleSubmit} className="relative">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask me anything..."
              className="w-full min-h-[120px] max-h-[200px] px-4 py-3 pr-24 bg-muted/50 border border-border rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary text-base"
              disabled={isLoading}
            />
            <div className="absolute bottom-3 right-3 flex items-center gap-2">
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                disabled={isLoading}
              >
                <Paperclip className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                disabled={isLoading}
              >
                <Mic className="w-4 h-4" />
              </Button>
              <Button
                type="submit"
                disabled={!input.trim() || isLoading}
                size="sm"
                className="rounded-lg"
              >
                {isLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Send className="w-4 h-4" />
                )}
              </Button>
            </div>
          </form>
          
          <div className="flex items-center justify-between mt-3 text-xs text-muted-foreground">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="text-orange-500">🔥</span> Kimi K2 released as open source, Model as Agent
              </span>
              <span>PPT export now available!</span>
            </div>
            <div className="flex items-center gap-3">
              <button className="hover:text-foreground transition-colors">
                Play a quiz game
              </button>
              <span>•</span>
              <button className="hover:text-foreground transition-colors">
                Voice chat coming soon
              </button>
              <span>•</span>
              <button className="hover:text-foreground transition-colors">
                Can AI predict lottery numbers?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}