import React, { useEffect, useState, useContext, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../Utils/Axios";
import { Store } from "../../Utils/Store";
import { toast } from "react-toastify";

function ChatPage() {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { UserInfo } = state;

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);
  const [error, setError] = useState(null);
  const [chatInfo, setChatInfo] = useState(null);
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Get user info from localStorage directly to avoid Store state issues
  const getCurrentUser = () => {
    try {
      const userFromStorage = localStorage.getItem("UserInfo");
      if (userFromStorage) {
        return JSON.parse(userFromStorage);
      }
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
    }
    return null;
  };

  const currentUser = getCurrentUser();

  // Check if user is logged in - only once on mount
  useEffect(() => {
    const checkAuth = () => {
      const userFromStorage = localStorage.getItem("UserInfo");
      if (!userFromStorage) {
        toast.error("Please login to access chat");
        navigate('/login');
        return false;
      }
      return true;
    };

    const timer = setTimeout(() => {
      if (checkAuth()) {
        setAuthChecked(true);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [navigate]);

  // Fetch chat info and messages
  useEffect(() => {
    if (!chatId || !currentUser || !authChecked) return;

    const fetchChatData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch chat info first
        const chatResponse = await api.get(`/chat/find/${currentUser._id}/${chatId}`);
        setChatInfo(chatResponse.data);
        
        // Fetch messages
        const messagesResponse = await api.get(`/messages/${chatId}`);
        setMessages(messagesResponse.data);
        
      } catch (err) {
        console.error("❌ Error fetching chat data:", err);
        setError(err.message || "Failed to load chat");
        toast.error("Failed to load chat");
      } finally {
        setLoading(false);
      }
    };

    fetchChatData();
  }, [chatId, currentUser, authChecked]);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input on load
  useEffect(() => {
    if (!loading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading]);

  const handleSendMessage = async () => {
    if (!newMessage.trim() || !currentUser || sending) return;

    try {
      setSending(true);
      const senderType = currentUser.isLawyer ? 'lawyer' : 'user';
      
      const { data } = await api.post(`/messages`, {
        content: newMessage,
        chatId,
        senderId: currentUser._id,
        senderType: senderType,
      });

      setMessages((prev) => [...prev, data]);
      setNewMessage("");
      
      // Focus back to input
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      
    } catch (err) {
      console.error("Error sending message:", err);
      toast.error("Failed to send message");
    } finally {
      setSending(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Don't render anything until auth is checked
  if (!authChecked) {
    return (
      <div className="chat-loading-container">
        <div className="chat-loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return <div className="chat-loading-container">Redirecting to login...</div>;
  }

  if (loading) {
    return (
      <div className="chat-loading-container">
        <div className="chat-loading-spinner">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Loading chat...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="chat-error-container">
        <div className="chat-error-content">
          <i className="fas fa-exclamation-triangle text-danger mb-3" style={{ fontSize: '3rem' }}></i>
          <h4>Error Loading Chat</h4>
          <p className="text-muted">{error}</p>
          <button 
            className="btn btn-primary" 
            onClick={() => window.location.reload()}
          >
            <i className="fas fa-redo me-2"></i>
            Retry
          </button>
        </div>
      </div>
    );
  }

  // Get the other participant's info
  const otherParticipant = chatInfo?.user?._id === currentUser._id 
    ? chatInfo?.lawyer 
    : chatInfo?.user;

  return (
    <div className="chat-container">
      {/* Chat Header */}
      <div className="chat-header">
        <div className="chat-header-content">
          <button 
            className="btn btn-link back-btn"
            onClick={() => navigate(-1)}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          
          <div className="chat-participant-info">
            <div className="participant-avatar">
              <img 
                src={otherParticipant?.image ? `/uploads/${otherParticipant.image}` : "/assets/website/images/avatar-1.jpg"} 
                alt={otherParticipant?.firstName || "User"}
                onError={(e) => {
                  e.target.src = "/assets/website/images/avatar-1.jpg";
                }}
              />
            </div>
            <div className="participant-details">
              <h5 className="participant-name">
                {otherParticipant?.firstName} {otherParticipant?.lastName}
              </h5>
              <span className="participant-status">
                {otherParticipant?.isLawyer ? "Lawyer" : "Client"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="messages-container">
        {messages.length === 0 ? (
          <div className="empty-chat">
            <div className="empty-chat-icon">
              <i className="fas fa-comments"></i>
            </div>
            <h5>Start a Conversation</h5>
            <p className="text-muted">
              Send a message to begin chatting with {otherParticipant?.firstName}
            </p>
          </div>
        ) : (
          <div className="messages-list">
            {messages.map((msg, idx) => {
              const isOwnMessage = msg.sender._id === currentUser._id;
              const showDate = idx === 0 || 
                new Date(msg.createdAt).toDateString() !== 
                new Date(messages[idx - 1].createdAt).toDateString();
              
              return (
                <div key={msg._id || idx}>
                  {showDate && (
                    <div className="message-date-divider">
                      <span>{new Date(msg.createdAt).toLocaleDateString()}</span>
                    </div>
                  )}
                  <div className={`message-wrapper ${isOwnMessage ? 'own-message' : 'other-message'}`}>
                    <div className={`message ${isOwnMessage ? 'own' : 'other'}`}>
                      <div className="message-content">
                        {msg.content}
                      </div>
                      <div className="message-time">
                        {new Date(msg.createdAt).toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div ref={messagesEndRef} />
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="message-input-container">
        <div className="message-input-wrapper">
          <textarea
            ref={inputRef}
            className="message-input"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            rows="1"
            disabled={sending}
          />
          <button 
            className={`send-button ${newMessage.trim() ? 'active' : ''}`}
            onClick={handleSendMessage}
            disabled={!newMessage.trim() || sending}
          >
            {sending ? (
              <div className="spinner-border spinner-border-sm" role="status">
                <span className="visually-hidden">Sending...</span>
              </div>
            ) : (
              <i className="fas fa-paper-plane"></i>
            )}
          </button>
        </div>
      </div>

      <style jsx>{`
        .chat-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          background: #f8f9fa;
          max-width: 800px;
          margin: 0 auto;
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }

        .chat-loading-container,
        .chat-error-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background: #f8f9fa;
        }

        .chat-loading-spinner,
        .chat-error-content {
          text-align: center;
          padding: 2rem;
        }

        .chat-header {
          background: white;
          border-bottom: 1px solid #e9ecef;
          padding: 1rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .chat-header-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .back-btn {
          color: #6c757d;
          padding: 0.5rem;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .back-btn:hover {
          background: #f8f9fa;
          color: #495057;
        }

        .chat-participant-info {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex: 1;
        }

        .participant-avatar img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        .participant-name {
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
          color: #212529;
        }

        .participant-status {
          font-size: 0.875rem;
          color: #6c757d;
        }

        .messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
          background: #f8f9fa;
        }

        .empty-chat {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-align: center;
        }

        .empty-chat-icon {
          font-size: 4rem;
          color: #dee2e6;
          margin-bottom: 1rem;
        }

        .messages-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .message-date-divider {
          text-align: center;
          margin: 1rem 0;
        }

        .message-date-divider span {
          background: white;
          padding: 0.25rem 1rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          color: #6c757d;
          border: 1px solid #dee2e6;
        }

        .message-wrapper {
          display: flex;
          margin-bottom: 0.5rem;
        }

        .message-wrapper.own-message {
          justify-content: flex-end;
        }

        .message-wrapper.other-message {
          justify-content: flex-start;
        }

        .message {
          max-width: 70%;
          padding: 0.75rem 1rem;
          border-radius: 1rem;
          position: relative;
        }

        .message.own {
          background: #007bff;
          color: white;
          border-bottom-right-radius: 0.25rem;
        }

        .message.other {
          background: white;
          color: #212529;
          border: 1px solid #e9ecef;
          border-bottom-left-radius: 0.25rem;
        }

        .message-content {
          margin-bottom: 0.25rem;
          word-wrap: break-word;
        }

        .message-time {
          font-size: 0.75rem;
          opacity: 0.7;
          text-align: right;
        }

        .message-input-container {
          background: white;
          border-top: 1px solid #e9ecef;
          padding: 1rem;
        }

        .message-input-wrapper {
          display: flex;
          align-items: flex-end;
          gap: 0.75rem;
          background: #f8f9fa;
          border-radius: 1.5rem;
          padding: 0.5rem;
        }

        .message-input {
          flex: 1;
          border: none;
          background: transparent;
          resize: none;
          padding: 0.5rem;
          font-size: 0.9rem;
          outline: none;
          max-height: 100px;
          min-height: 20px;
        }

        .send-button {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: none;
          background: #dee2e6;
          color: #6c757d;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .send-button.active {
          background: #007bff;
          color: white;
        }

        .send-button:hover:not(:disabled) {
          transform: scale(1.05);
        }

        .send-button:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }

        @media (max-width: 768px) {
          .chat-container {
            height: 100vh;
            max-width: 100%;
          }
          
          .message {
            max-width: 85%;
          }
        }
      `}</style>
    </div>
  );
}

export default ChatPage; 