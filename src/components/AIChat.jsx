import React, { useState, useRef, useEffect } from 'react';
import { X, Terminal, ChevronRight, Minimize2 } from 'lucide-react';
import { getChatbotResponse } from '../utils/chatbot.js';

const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Terminal initialized. Type 'help' for available commands." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');

    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await getChatbotResponse(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    } catch (error) {
        console.error(error);
      setMessages(prev => [...prev, { role: 'assistant', text: "Error executing command." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-20 md:bottom-6 left-4 right-4 md:left-auto md:right-6 z-50 flex flex-col items-end font-mono">
      
      {isOpen && (
        <div className="mb-4 w-full md:w-[400px] h-[65vh] max-h-[65vh] md:h-[500px] md:max-h-[500px] bg-background border border-primary/50 shadow-2xl shadow-primary/10 flex flex-col animate-fade-in-up">
          
          {/* Terminal Header */}
          <div className="bg-surface border-b border-primary/30 p-2 flex justify-between items-center select-none shrink-0">
            <div className="flex items-center gap-2 px-2">
              <Terminal size={14} className="text-primary" />
              <span className="text-xs text-slate-300">sys_admin_tool.exe</span>
            </div>

            <div className="flex items-center gap-2">
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded text-slate-400 hover:text-white">
                <Minimize2 size={14} />
              </button>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-red-500/20 rounded text-slate-400 hover:text-red-500">
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Terminal Output */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
            {messages.map((msg, idx) => (
              <div key={idx} className="flex gap-2">
                <span className={msg.role === 'user' ? 'text-blue-400 shrink-0' : 'text-primary shrink-0'}>
                  {msg.role === 'user' ? '>' : '$'}
                </span>
                <span className="text-slate-300 leading-relaxed whitespace-pre-wrap break-words">
                  {msg.text}
                </span>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2">
                <span className="text-primary shrink-0">$</span>
                <span className="text-primary animate-pulse">Processing request...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-surface border-t border-primary/30 flex items-center gap-2 shrink-0">
            <ChevronRight size={16} className="text-primary animate-pulse shrink-0" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              autoFocus
              className="flex-1 bg-transparent border-none outline-none text-white text-sm font-mono placeholder-slate-600 min-w-0"
              placeholder="Type command..."
            />
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-surface border border-primary/50 text-primary p-4 hover:bg-primary hover:text-black transition-all shadow-lg shadow-primary/20 group rounded-full md:rounded-none"
          aria-label="Open Terminal Chat"
        >
          <Terminal size={24} className="group-hover:scale-110 transition-transform" />
        </button>
      )}

    </div>
  );
};

export default AIChat;
