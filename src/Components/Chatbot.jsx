import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, User, Bot } from 'lucide-react';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { id: 1, text: "Hello! I'm your Ignix assistant. How can I help you today?", sender: 'bot' }
    ]);
    const [input, setInput] = useState('');

    const toggleChat = () => setIsOpen(!isOpen);

    const handleSend = (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const newMessage = { id: Date.now(), text: input, sender: 'user' };
        setMessages([...messages, newMessage]);
        setInput('');

        // Simulate bot response
        setTimeout(() => {
            const botResponse = {
                id: Date.now() + 1,
                text: "Thanks for reaching out! A member of our team will get back to you shortly, or you can check our solutions page for more info.",
                sender: 'bot'
            };
            setMessages(prev => [...prev, botResponse]);
        }, 1000);
    };

    return (
        <div className="fixed bottom-6 right-24 z-[100] font-sans">
            {/* Chatbot Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleChat}
                className="bg-[#004e92] text-cyan-400 p-4 rounded-full shadow-2xl flex items-center justify-center border border-cyan-400/30 backdrop-blur-md"
                aria-label="Open Chatbot"
            >
                {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="absolute bottom-20 right-0 w-[90vw] sm:w-[400px] h-[500px] overflow-hidden rounded-2xl flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/20 backdrop-blur-2xl bg-black/40 text-white"
                    >
                        {/* Header */}
                        <div className="p-4 bg-gradient-to-r from-[#000428] to-[#004e92] border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-cyan-400/20 rounded-lg text-cyan-400">
                                    <Bot size={20} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm tracking-tight text-white uppercase">Ignix Intelligence</h3>
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                        <span className="text-[10px] text-cyan-400/80 uppercase font-medium">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={toggleChat}
                                className="text-white/50 hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
                            {messages.map((msg) => (
                                <motion.div
                                    initial={{ opacity: 0, x: msg.sender === 'user' ? 10 : -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    key={msg.id}
                                    className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex gap-2 max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                                        <div className={`p-1.5 rounded-full w-8 h-8 flex items-center justify-center shrink-0 ${msg.sender === 'user' ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/10 text-white/70'
                                            }`}>
                                            {msg.sender === 'user' ? <User size={14} /> : <Bot size={14} />}
                                        </div>
                                        <div className={`p-3 rounded-2xl text-sm ${msg.sender === 'user'
                                                ? 'bg-cyan-500/20 text-white border border-cyan-500/30 rounded-tr-none'
                                                : 'bg-white/5 text-white/90 border border-white/10 rounded-tl-none'
                                            }`}>
                                            {msg.text}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSend} className="p-4 border-t border-white/10 bg-black/20">
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type a message..."
                                    className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-5 pr-12 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors placeholder:text-white/20"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 p-2 bg-cyan-500 text-black rounded-full hover:bg-cyan-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled={!input.trim()}
                                >
                                    <Send size={16} />
                                </button>
                            </div>
                            <p className="text-[10px] text-center mt-3 text-white/30 uppercase tracking-widest font-medium">
                                Powered by Ignix AI
                            </p>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;
