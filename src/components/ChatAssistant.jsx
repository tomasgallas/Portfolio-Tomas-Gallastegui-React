// src/components/ChatAssistant.jsx
import { useState, useRef, useEffect } from 'react';
import { portfolioKnowledge } from '../data/knowledge';

function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: "Hi! I'm Tomás's AI Assistant. Ask me anything about his projects, technical skills, or background."
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Referencia para hacer scroll automático al último mensaje
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

    const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: 'user', content: input.trim() };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;
    const API_URL = "https://api.groq.com/openai/v1/chat/completions";

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'allam-2-7b', // 👈 El modelo que te funcionó impecable
          messages: [
            { role: 'system', content: portfolioKnowledge },
            ...messages
              .filter((m, index) => index > 0 && !m.content.startsWith("⚠️"))
              .map((m) => ({ role: m.role, content: m.content })),
            userMessage
          ],
          temperature: 0.4,
          max_tokens: 200,
        }),
      });

      if (!response.ok) {
        const errorDetails = await response.json().catch(() => ({}));
        throw new Error(errorDetails.error?.message || `Error ${response.status}`);
      }

      const data = await response.json();
      const assistantReply =
        data.choices?.[0]?.message?.content ||
        "I couldn't process an answer.";

      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: assistantReply },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "⚠️ Error connecting to AI: " + error.message,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <aside className="chat-widget" aria-label="AI Assistant Chat">
      {/* Botón flotante para abrir / cerrar */}
      <button 
        type="button"
        className="chat-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close AI Chat" : "Open AI Chat"}
      >
        {isOpen ? (
          // Icono X de cerrar
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          // Icono de Robot / Chat
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 8V4H8"></path>
            <rect x="4" y="8" width="16" height="12" rx="2"></rect>
            <path d="M2 14h2"></path>
            <path d="M20 14h2"></path>
            <path d="M15 13v2"></path>
            <path d="M9 13v2"></path>
          </svg>
        )}
      </button>

      {/* Ventana de chat desplegable */}
      {isOpen && (
        <div className="chat-window">
          <header className="chat-header">
            <div className="chat-title">
              <span className="status-dot"></span>
              <strong>Tomás's AI Assistant</strong>
            </div>
            <button 
              type="button"
              className="chat-close" 
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </header>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`chat-bubble ${msg.role === 'user' ? 'user' : 'assistant'}`}
              >
                {msg.content}
              </div>
            ))}

            {isLoading && (
              <div className="chat-bubble assistant typing">
                <span>Thinking</span>
                <span className="dot-animation">...</span>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chat-input-form">
            <input
              type="text"
              placeholder="Ask about my experience, skills..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button type="submit" disabled={isLoading || !input.trim()}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </form>
        </div>
      )}
    </aside>
  );
}

export default ChatAssistant;