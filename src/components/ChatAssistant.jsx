// src/components/ChatAssistant.jsx
import { useState, useRef, useEffect } from 'react';
import { portfolioKnowledge } from '../data/knowledge';

function ChatAssistant({ t }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'initial',
      role: 'assistant',
      content: t?.initialGreeting || "Hi! I'm Tomás's AI Assistant. Ask me anything about his projects, technical skills, or background."
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const messagesEndRef = useRef(null);
  const abortControllerRef = useRef(null); // 👈 Referencia para cancelar peticiones pendientes

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Cleanup: si se desmonta o se cierra la ventana, abortamos la petición en vuelo
  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { 
      id: crypto.randomUUID(), 
      role: 'user', 
      content: input.trim() 
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Cancelamos petición anterior si existiera
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    const API_URL = "/api/chat";

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        signal: controller.signal, // 👈 Petición cancelable con AbortSignal
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'allam-2-7b',
          messages: [
            { role: 'system', content: portfolioKnowledge },
            ...messages
              .filter((m, index) => index > 0 && !m.content.startsWith("⚠️"))
              .map((m) => ({ role: m.role, content: m.content })),
            userMessage
          ],
          temperature: 0.6,
          max_tokens: 300,
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
        { id: crypto.randomUUID(), role: 'assistant', content: assistantReply },
      ]);
    } catch (error) {
      if (error.name === 'AbortError') return; // Cancelación controlada
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: 'assistant',
          content: "⚠️ Error connecting to AI: " + error.message,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const chatTitle = t?.title || "Tomás's AI Assistant";
  const chatPlaceholder = t?.placeholder || "Ask about my experience, skills...";

  return (
    <aside className="chat-widget" aria-label={chatTitle}>
      {/* Botón flotante para abrir / cerrar */}
      <button 
        type="button"
        className="chat-toggle-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? (t?.close || "Close AI Chat") : (t?.open || "Open AI Chat")}
      >
        {isOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
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
              <strong>{chatTitle}</strong>
            </div>
            <button 
              type="button"
              className="chat-close" 
              onClick={() => setIsOpen(false)}
              aria-label={t?.close || "Close AI Chat"}
            >
              ✕
            </button>
          </header>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`chat-bubble ${msg.role === 'user' ? 'user' : 'assistant'}`}
              >
                {msg.content}
              </div>
            ))}

            {isLoading && (
              <div className="chat-bubble assistant typing">
                <span>{t?.thinking || "Thinking"}</span>
                <span className="dot-animation">...</span>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chat-input-form">
            <input
              type="text"
              placeholder={chatPlaceholder}
              aria-label={chatPlaceholder}
              autoComplete="off"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              aria-label={t?.send || "Send message"}
            >
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