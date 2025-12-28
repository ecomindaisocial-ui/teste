
import React, { useState, useRef, useEffect } from 'react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIAssistantProps {
  t: any;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'assistant', content: t.greeting }]);
    }
  }, [t.greeting]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    const history = messages.slice(-5);
    const response = await geminiService.chat(input, history);
    
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 bg-eco-green text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all shadow-eco-green/30 ${isOpen ? 'rotate-90' : ''}`}
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-brain'} text-2xl`}></i>
      </button>

      {isOpen && (
        <div className="absolute bottom-24 right-0 w-[90vw] md:w-[420px] h-[600px] bg-white rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(46,125,50,0.15)] flex flex-col border border-slate-100 animate-in slide-in-from-bottom-5 duration-500 overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between bg-eco-cream/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-eco-green rounded-2xl flex items-center justify-center shadow-lg shadow-eco-green/10">
                <i className="fas fa-seedling text-white text-xl"></i>
              </div>
              <div>
                <h4 className="font-black text-slate-900 leading-tight">EcoMind AI</h4>
                <div className="flex items-center gap-1.5">
                   <span className="w-1.5 h-1.5 bg-eco-green rounded-full animate-pulse"></span>
                   <p className="text-[10px] text-eco-forest uppercase tracking-widest font-black">{t.online}</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-slate-500 transition-colors">
              <i className="fas fa-times"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-8 space-y-6 bg-white">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] px-6 py-4 rounded-3xl text-sm leading-relaxed font-medium ${
                  msg.role === 'user' 
                    ? 'bg-eco-green text-white rounded-tr-none shadow-lg shadow-eco-green/10' 
                    : 'bg-slate-50 text-slate-700 rounded-tl-none border border-slate-100'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-50 text-slate-600 px-6 py-4 rounded-3xl rounded-tl-none animate-pulse border border-slate-100">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-eco-green rounded-full"></div>
                    <div className="w-2 h-2 bg-eco-green rounded-full opacity-60"></div>
                    <div className="w-2 h-2 bg-eco-green rounded-full opacity-30"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-slate-50">
            <div className="flex items-center gap-3 bg-slate-50 border border-slate-100 rounded-2xl px-6 py-2 focus-within:border-eco-green focus-within:bg-white transition-all shadow-inner">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                type="text" 
                placeholder={t.placeholder}
                className="bg-transparent border-none focus:ring-0 text-sm text-slate-900 w-full py-3 placeholder:text-slate-400 font-medium"
              />
              <button onClick={handleSend} className="w-10 h-10 bg-eco-green text-white rounded-xl flex items-center justify-center hover:bg-eco-forest transition-colors shadow-lg shadow-eco-green/10">
                <i className="fas fa-paper-plane text-xs"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIAssistant;
