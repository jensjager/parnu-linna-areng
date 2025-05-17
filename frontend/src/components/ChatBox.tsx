// components/ChatBox.tsx
'use client';

import React, { useState } from 'react';

const ChatBox: React.FC = () => {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);

  // Helper to turn URLs into <a> elements
  const linkify = (text: string) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    return parts.map((part, i) =>
      urlRegex.test(part) ? (
        <a
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#0070f3', textDecoration: 'underline' }}
        >
          {'Rohevõrgustik'}
        </a>
      ) : (
        part
      )
    );
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const res = await fetch('http://localhost:4000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = { sender: 'bot', text: data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error('Chat error:', err);
    }

    setInput('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          padding: '12px 18px',
          borderRadius: '50%',
          backgroundColor: '#0070f3',
          color: '#fff',
          border: 'none',
          cursor: 'pointer',
          zIndex: 1000,
        }}
      >
        💬
      </button>

      {open && (
        <div
          style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
            width: '320px',
            height: '400px',
            border: '1px solid #ccc',
            borderRadius: '10px',
            backgroundColor: '#fff',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 999,
          }}
        >
          <div style={{ flex: 1, overflowY: 'auto', padding: '10px' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong>{' '}
                {linkify(msg.text)}
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', borderTop: '1px solid #eee' }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              style={{ flex: 1, padding: '10px', border: 'none' }}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage} style={{ padding: '10px' }}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;

