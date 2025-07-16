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
  const hasLoadedChat = useRef(false);
  const [lastMessageId, setLastMessageId] = useState(null);
  const notificationSoundRef = useRef(null);
  // Track if the user just sent a message
  const [justSentMessage, setJustSentMessage] = useState(false);

  // Use UserInfo from context first, then fallback to localStorage
  const getCurrentUser = () => {
    if (UserInfo) return UserInfo;
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

  useEffect(() => {
    hasLoadedChat.current = false;
  }, [chatId]);

  useEffect(() => {
    if (!chatId || !currentUser?._id || !authChecked || hasLoadedChat.current) return;

    if (chatId.length !== 24) {
      console.error("❌ Invalid chatId format:", chatId);
      setError("Invalid chat ID format");
      setLoading(false);
      return;
    }

    const fetchChatData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const chatResponse = await api.get(`/chat/${chatId}`);
        setChatInfo(chatResponse.data);
        
        const messagesResponse = await api.get(`/messages/${chatId}`);
        setMessages(messagesResponse.data);
        
        hasLoadedChat.current = true;
        
      } catch (err) {
        console.error("❌ Error fetching chat data:", err);
        setError(err.response?.data?.message || err.message || "Failed to load chat");
        toast.error("Failed to load chat");
      } finally {
        setLoading(false);
      }
    };

    fetchChatData();
  }, [chatId, currentUser?._id, authChecked]);

  // Poll for new messages every 3 seconds
  useEffect(() => {
    if (!chatId || !currentUser?._id || !authChecked) return;
    let intervalId;
    let isMounted = true;

    const fetchNewMessages = async () => {
      try {
        const messagesResponse = await api.get(`/messages/${chatId}`);
        if (!isMounted) return;
        const newMessages = messagesResponse.data;
        // Only notify if a new message from the other participant arrives
        if (messages.length > 0 && newMessages.length > messages.length) {
          const lastNewMsg = newMessages[newMessages.length - 1];
          let isOwnMessage = false;
          if (lastNewMsg.sender && currentUser) {
            const senderId = typeof lastNewMsg.sender === 'object' ? lastNewMsg.sender._id : lastNewMsg.sender;
            isOwnMessage = senderId && senderId.toString() === currentUser._id.toString();
          }
          if (!isOwnMessage) {
            // Play sound
            if (notificationSoundRef.current) {
              notificationSoundRef.current.currentTime = 0;
              notificationSoundRef.current.play();
            }
            // Show notification
            toast.info(
              `${lastNewMsg.sender.firstName || 'New'}: ${lastNewMsg.content}`,
              { autoClose: 3000 }
            );
          }
        }
        setMessages(newMessages);
      } catch (err) {
        // Optionally handle polling errors
      }
    };

    intervalId = setInterval(fetchNewMessages, 3000);
    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
    // eslint-disable-next-line
  }, [chatId, currentUser?._id, authChecked, messages]);

  // Only scroll to bottom when a message is sent by the current user
  useEffect(() => {
    if (justSentMessage) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
      setJustSentMessage(false);
    }
  }, [messages, justSentMessage]);

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
      setJustSentMessage(true); // Only scroll after sending
      
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

  if (!authChecked) {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-3">Checking authentication...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return <div className="container mt-4">Redirecting to login...</div>;
  }

  if (loading) {
    return (
      <div className="container mt-4">
        <div className="text-center">
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
      <div className="container mt-4">
        <div className="alert alert-danger">
          <h4>Error Loading Chat</h4>
          <p>{error}</p>
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

  const otherParticipant = chatInfo?.user?._id === currentUser._id 
    ? chatInfo?.lawyer 
    : chatInfo?.user;

  // Notification sound: use the correct file name
  const NOTIFICATION_SOUND_URL = "/assets/website/sounds/notification.mp3";

  return (
    <>
      {/* Notification sound: if the file is missing, no error will be thrown */}
      <audio ref={notificationSoundRef} src={NOTIFICATION_SOUND_URL} preload="auto" onError={() => { console.warn('Notification sound failed to load.'); }} />
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: '#f4f6fa', maxWidth: '600px', margin: '0 auto', boxShadow: '0 0 20px rgba(0,0,0,0.10)', borderRadius: '1.2rem', overflow: 'hidden' }}>
        {/* Chat Header */}
        <div style={{ background: 'white', borderBottom: '1px solid #e9ecef', padding: '1rem 1.5rem', boxShadow: '0 2px 4px rgba(0,0,0,0.06)', position: 'sticky', top: 0, zIndex: 10, display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button 
            style={{ background: 'none', border: 'none', color: '#6c757d', padding: '0.5rem', borderRadius: '50%', cursor: 'pointer' }}
            onClick={() => navigate(-1)}
          >
            <i className="fas fa-arrow-left"></i>
          </button>
          <img 
            src={otherParticipant?.image ? `/uploads/${otherParticipant.image}` : "/assets/website/images/avatar-1.jpg"} 
            alt={otherParticipant?.firstName || "User"}
            style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover', border: '2px solid #e0e7ef' }}
            onError={(e) => {
              e.target.src = "/assets/website/images/avatar-1.jpg";
            }}
          />
          <div style={{ flex: 1 }}>
            <h5 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 700, color: '#212529' }}>
              {otherParticipant?.firstName} {otherParticipant?.lastName}
            </h5>
            <span style={{ fontSize: '0.93rem', color: '#6c757d' }}>
              {otherParticipant?.isLawyer ? "Lawyer" : "Client"}
            </span>
          </div>
        </div>

        {/* Messages Container */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.5rem 1rem 1rem 1rem', background: '#f4f6fa', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {messages.length === 0 ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center' }}>
              <i className="fas fa-comments" style={{ fontSize: '4rem', color: '#dee2e6', marginBottom: '1rem' }}></i>
              <h5>Start a Conversation</h5>
              <p className="text-muted">
                Send a message to begin chatting with {otherParticipant?.firstName}
              </p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {messages.map((msg, idx) => {
                // Robust sender check: handle missing sender, and compare as string
                let isOwnMessage = false;
                if (msg.sender && currentUser) {
                  // sender could be object or string (ObjectId)
                  const senderId = typeof msg.sender === 'object' ? msg.sender._id : msg.sender;
                  isOwnMessage = senderId && senderId.toString() === currentUser._id.toString();
                }
                const showDate = idx === 0 || 
                  new Date(msg.createdAt).toDateString() !== 
                  new Date(messages[idx - 1].createdAt).toDateString();
                return (
                  <div key={msg._id || idx}>
                    {showDate && (
                      <div style={{ textAlign: 'center', margin: '1.2rem 0 0.7rem 0' }}>
                        <span style={{ background: '#fff', padding: '0.45rem 1.2rem', borderRadius: '1.2rem', fontSize: '0.93rem', color: '#6c757d', border: '1px solid #e0e7ef', fontWeight: 500 }}>
                          {new Date(msg.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    )}
                    <div style={{ display: 'flex', justifyContent: isOwnMessage ? 'flex-end' : 'flex-start', alignItems: 'flex-end' }}>
                      <div style={{
                        maxWidth: '70%',
                        background: isOwnMessage ? '#2d7aee' : '#fff',
                        color: isOwnMessage ? '#fff' : '#212529',
                        borderRadius: isOwnMessage ? '1.2rem 1.2rem 0.3rem 1.2rem' : '1.2rem 1.2rem 1.2rem 0.3rem',
                        padding: '0.85rem 1.2rem',
                        marginBottom: '0.2rem',
                        boxShadow: '0 1px 4px rgba(44,62,80,0.07)',
                        fontSize: '1.05rem',
                        wordBreak: 'break-word',
                        position: 'relative',
                        border: isOwnMessage ? 'none' : '1.5px solid #e0e7ef',
                      }}>
                        <div>{msg.content}</div>
                        <div style={{ fontSize: '0.82rem', opacity: 0.7, textAlign: 'right', marginTop: 6 }}>
                          {new Date(msg.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div style={{ background: '#fff', borderTop: '1.5px solid #e0e7ef', padding: '1rem 1.2rem', display: 'flex', alignItems: 'center', gap: '1rem', position: 'sticky', bottom: 0, zIndex: 10 }}>
          <input
            ref={inputRef}
            type="text"
            className="form-control"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{ borderRadius: '1.2rem', padding: '0.85rem 1.2rem', fontSize: '1.08rem', border: '1.5px solid #e0e7ef', flex: 1, background: '#f8f9fa' }}
            disabled={sending}
          />
          <button
            className="btn btn-primary"
            style={{ borderRadius: '1.2rem', padding: '0.7rem 1.5rem', fontWeight: 600, fontSize: '1.08rem', boxShadow: '0 2px 8px rgba(44,62,80,0.07)' }}
            onClick={handleSendMessage}
            disabled={sending || !newMessage.trim()}
          >
            <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default ChatPage;