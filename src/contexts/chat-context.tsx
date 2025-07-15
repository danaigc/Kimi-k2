"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ChatSession, Message, ChatStorage } from '@/lib/chat-storage';

interface ChatContextType {
  sessions: ChatSession[];
  currentSession: ChatSession | null;
  createNewSession: () => void;
  selectSession: (sessionId: string) => void;
  deleteSession: (sessionId: string) => void;
  addMessage: (message: Message) => void;
  updateCurrentSession: (session: ChatSession) => void;
  clearAllSessions: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [currentSession, setCurrentSession] = useState<ChatSession | null>(null);

  // Load sessions from localStorage on mount
  useEffect(() => {
    const loadedSessions = ChatStorage.getAllSessions();
    setSessions(loadedSessions);
    
    // If there are sessions but no current session, select the first one
    if (loadedSessions.length > 0 && !currentSession) {
      setCurrentSession(loadedSessions[0]);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const createNewSession = useCallback(() => {
    const newSession = ChatStorage.createNewSession();
    ChatStorage.saveSession(newSession);
    setSessions(prev => [newSession, ...prev]);
    setCurrentSession(newSession);
  }, []);

  const selectSession = useCallback((sessionId: string) => {
    const session = ChatStorage.getSession(sessionId);
    if (session) {
      setCurrentSession(session);
    }
  }, []);

  const deleteSession = useCallback((sessionId: string) => {
    ChatStorage.deleteSession(sessionId);
    setSessions(prev => prev.filter(s => s.id !== sessionId));
    
    // If we deleted the current session, select another one
    if (currentSession?.id === sessionId) {
      const remainingSessions = sessions.filter(s => s.id !== sessionId);
      setCurrentSession(remainingSessions.length > 0 ? remainingSessions[0] : null);
    }
  }, [currentSession, sessions]);

  const addMessage = useCallback((message: Message) => {
    if (!currentSession) return;
    
    const updatedSession = {
      ...currentSession,
      messages: [...currentSession.messages, message],
      updatedAt: new Date()
    };
    
    // Auto-generate title from first user message
    if (currentSession.messages.length === 0 && message.role === 'user') {
      updatedSession.title = ChatStorage.generateTitleFromMessages([message]);
    }
    
    ChatStorage.saveSession(updatedSession);
    setCurrentSession(updatedSession);
    setSessions(prev => {
      const index = prev.findIndex(s => s.id === updatedSession.id);
      if (index >= 0) {
        const newSessions = [...prev];
        newSessions[index] = updatedSession;
        return newSessions;
      }
      return prev;
    });
  }, [currentSession]);

  const updateCurrentSession = useCallback((session: ChatSession) => {
    ChatStorage.saveSession(session);
    setCurrentSession(session);
    setSessions(prev => {
      const index = prev.findIndex(s => s.id === session.id);
      if (index >= 0) {
        const newSessions = [...prev];
        newSessions[index] = session;
        return newSessions;
      }
      return prev;
    });
  }, []);

  const clearAllSessions = useCallback(() => {
    ChatStorage.clearAllSessions();
    setSessions([]);
    setCurrentSession(null);
  }, []);

  return (
    <ChatContext.Provider value={{
      sessions,
      currentSession,
      createNewSession,
      selectSession,
      deleteSession,
      addMessage,
      updateCurrentSession,
      clearAllSessions
    }}>
      {children}
    </ChatContext.Provider>
  );
}

export function useChatContext() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
}