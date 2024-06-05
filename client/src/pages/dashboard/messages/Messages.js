import React, { useEffect, useState } from 'react';
import { collection, query, orderBy, onSnapshot, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../../firebase/config';
import './Messages.css'; 

const Messages = ({ setSelectedLink, link }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    setSelectedLink(link);

    const messagesRef = collection(db, 'messages');
    const q = query(messagesRef, orderBy('timestamp', 'asc'));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messagesData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(messagesData);
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, [link, setSelectedLink]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    await addDoc(collection(db, 'messages'), {
      text: newMessage,
      user: 'User', // Replace with actual user data
      timestamp: serverTimestamp(),
    });

    setNewMessage('');
  };

  return (
    <div className="messages-container">
      <h2>Messages</h2>
      <div className="messages-list">
        {messages.map((message) => (
          <div key={message.id} className="message-item">
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="message-form">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
};

export default Messages;
