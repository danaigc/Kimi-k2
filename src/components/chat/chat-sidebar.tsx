"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  Plus, 
  Search, 
  Trash2,
  Settings,
  History,
  Calendar
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useChatContext } from "@/contexts/chat-context";
import { ChatSession } from "@/lib/chat-storage";

interface ChatSidebarProps {
  className?: string;
}

export function ChatSidebar({ className }: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const { sessions, currentSession, createNewSession, selectSession, deleteSession, clearAllSessions } = useChatContext();
  
  const filteredSessions = sessions.filter(session => 
    session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    session.messages.some(msg => msg.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const formatRelativeTime = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes}m ago`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)}h ago`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)}d ago`;
    }
  };

  const groupSessionsByDate = (sessions: ChatSession[]) => {
    const groups: { [key: string]: ChatSession[] } = {};
    const now = new Date();
    
    sessions.forEach(session => {
      const diffInDays = Math.floor((now.getTime() - session.updatedAt.getTime()) / (1000 * 60 * 60 * 24));
      
      let groupKey;
      if (diffInDays === 0) {
        groupKey = "Today";
      } else if (diffInDays === 1) {
        groupKey = "Yesterday";
      } else if (diffInDays <= 7) {
        groupKey = "This Week";
      } else {
        groupKey = "Older";
      }
      
      if (!groups[groupKey]) {
        groups[groupKey] = [];
      }
      groups[groupKey].push(session);
    });
    
    return groups;
  };

  const groupedSessions = groupSessionsByDate(filteredSessions);

  const handleDeleteSession = (e: React.MouseEvent, sessionId: string) => {
    e.stopPropagation();
    deleteSession(sessionId);
  };

  return (
    <div className={cn("w-80 bg-muted/20 border-r border-border flex flex-col h-full", className)}>
      {/* Header */}
      <div className="p-4 flex-shrink-0 border-b border-border/50">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Chat History</h2>
          <Button variant="ghost" size="sm">
            <Settings className="w-4 h-4" />
          </Button>
        </div>
        
        {/* New Chat Button */}
        <Button 
          className="w-full mb-3" 
          size="sm" 
          variant="secondary"
          onClick={createNewSession}
        >
          <Plus className="w-4 h-4 mr-2" />
          New Chat
        </Button>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-background/50 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <ScrollArea className="h-full w-full">
          <div className="p-2 pb-4">
          {Object.entries(groupedSessions).map(([groupName, sessions]) => (
            <div key={groupName} className="mb-6">
              <div className="flex items-center gap-2 px-2 py-1 mb-2">
                <Calendar className="w-3 h-3 text-muted-foreground" />
                <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                  {groupName}
                </span>
              </div>
              
              <div className="space-y-1">
                {sessions.map((session) => (
                  <motion.div
                    key={session.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={cn(
                      "group p-3 rounded-lg cursor-pointer transition-all hover:bg-background/70",
                      currentSession?.id === session.id && "bg-background shadow-sm"
                    )}
                    onClick={() => selectSession(session.id)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <MessageSquare className="w-3 h-3 text-muted-foreground flex-shrink-0" />
                          <h3 className="text-sm font-medium truncate">{session.title}</h3>
                        </div>
                        {session.messages.length > 0 && (
                          <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                            {session.messages[session.messages.length - 1].content}
                          </p>
                        )}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs px-2 py-0">
                              {session.messages.length}
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {formatRelativeTime(session.updatedAt)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="opacity-0 group-hover:opacity-100 transition-opacity ml-2"
                        onClick={(e) => handleDeleteSession(e, session.id)}
                      >
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
          
          {filteredSessions.length === 0 && (
            <div className="text-center py-8">
              <p className="text-sm text-muted-foreground">
                {searchQuery ? "No conversations found" : "No conversations yet"}
              </p>
              {!searchQuery && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="mt-2"
                  onClick={createNewSession}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Start a new chat
                </Button>
              )}
            </div>
          )}
          </div>
        </ScrollArea>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border bg-muted/10 flex-shrink-0">
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <History className="w-3 h-3" />
            <span>{filteredSessions.length} conversations</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs hover:text-foreground"
            onClick={clearAllSessions}
          >
            <Trash2 className="w-3 h-3 mr-1" />
            Clear All
          </Button>
        </div>
      </div>
    </div>
  );
}