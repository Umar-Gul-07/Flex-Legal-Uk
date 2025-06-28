import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../Utils/Axios";
import { Store } from "../../Utils/Store";
import { toast } from "react-toastify";

function History() {
  const navigate = useNavigate();
  const { state } = useContext(Store);
  const { UserInfo } = state;

  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('chats');

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

  const currentUser = UserInfo || getCurrentUser();

  useEffect(() => {
    if (!currentUser) {
      toast.error("Please login to view history");
      navigate('/login');
      return;
    }

    const fetchChats = async () => {
      try {
        setLoading(true);
        const { data } = await api.get(`/chat/user/${currentUser._id}`);
        setChats(data);
      } catch (error) {
        console.error("Error fetching chats:", error);
        toast.error("Failed to load chat history");
      } finally {
        setLoading(false);
      }
    };

    fetchChats();
  }, [currentUser, navigate]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getLastMessagePreview = (chat) => {
    if (chat.latestMessage) {
      const content = chat.latestMessage.content;
      return content.length > 50 ? content.substring(0, 50) + '...' : content;
    }
    return 'No messages yet';
  };

  const handleChatClick = (chatId) => {
    navigate(`/chat/${chatId}`);
  };

  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="page-title-box d-flex align-items-center justify-content-between">
              <h4 className="mb-0">My History</h4>
              <div className="page-title-right">
                <ol className="breadcrumb m-0">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active">History</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <ul className="nav nav-tabs nav-tabs-custom" role="tablist">
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'chats' ? 'active' : ''}`}
                      onClick={() => setActiveTab('chats')}
                      style={{ cursor: 'pointer' }}
                    >
                      <i className="fas fa-comments me-2"></i>
                      Chat History
                    </a>
                  </li>
                  <li className="nav-item">
                    <a 
                      className={`nav-link ${activeTab === 'hired' ? 'active' : ''}`}
                      onClick={() => setActiveTab('hired')}
                      style={{ cursor: 'pointer' }}
                    >
                      <i className="fas fa-user-tie me-2"></i>
                      Hired Lawyers
                    </a>
                  </li>
                </ul>

                <div className="tab-content p-3">
                  {activeTab === 'chats' && (
                    <div className="tab-pane active">
                      <h5 className="mb-3">Recent Conversations</h5>
                      {loading ? (
                        <div className="text-center py-4">
                          <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <p className="mt-2">Loading chat history...</p>
                        </div>
                      ) : chats.length > 0 ? (
                        <div className="row">
                          {chats.map((chat) => (
                            <div key={chat._id} className="col-12 mb-3">
                              <div 
                                className="card"
                                style={{ 
                                  cursor: 'pointer',
                                  transition: 'all 0.3s ease',
                                  border: '1px solid #e9ecef'
                                }}
                                onClick={() => handleChatClick(chat._id)}
                                onMouseEnter={(e) => {
                                  e.target.style.transform = 'translateY(-2px)';
                                  e.target.style.boxShadow = '0 4px 12px rgba(0,0,0,0.15)';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.transform = 'translateY(0)';
                                  e.target.style.boxShadow = 'none';
                                }}
                              >
                                <div className="card-body">
                                  <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                      <img
                                        src={chat.lawyer?.image ? `/uploads/${chat.lawyer.image}` : "/assets/website/images/avatar-1.jpg"}
                                        className="rounded-circle"
                                        width="60"
                                        height="60"
                                        alt={chat.lawyer?.firstName || "Lawyer"}
                                        onError={(e) => {
                                          e.target.src = "/assets/website/images/avatar-1.jpg";
                                        }}
                                      />
                                    </div>
                                    <div className="flex-grow-1 ms-3">
                                      <div className="d-flex justify-content-between align-items-start">
                                        <div>
                                          <h6 className="mb-1">
                                            {chat.lawyer?.firstName} {chat.lawyer?.lastName}
                                          </h6>
                                          <p className="text-muted mb-1">
                                            {chat.lawyer?.expertise} • {chat.lawyer?.practiceArea}
                                          </p>
                                          <p className="text-muted mb-0 small">
                                            {getLastMessagePreview(chat)}
                                          </p>
                                        </div>
                                        <div className="text-end">
                                          <small className="text-muted">
                                            {formatDate(chat.updatedAt)}
                                          </small>
                                          <div className="mt-1">
                                            <span className="badge bg-primary">Active</span>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-5">
                          <i className="fas fa-comments text-muted" style={{ fontSize: '4rem' }}></i>
                          <h5 className="mt-3">No Chat History</h5>
                          <p className="text-muted">
                            You haven't started any conversations yet.
                          </p>
                          <button 
                            className="btn btn-primary"
                            onClick={() => navigate('/attorneys')}
                          >
                            <i className="fas fa-search me-2"></i>
                            Find a Lawyer
                          </button>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === 'hired' && (
                    <div className="tab-pane active">
                      <h5 className="mb-3">Hired Lawyers</h5>
                      {loading ? (
                        <div className="text-center py-4">
                          <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                          </div>
                          <p className="mt-2">Loading hired lawyers...</p>
                        </div>
                      ) : chats.length > 0 ? (
                        <div className="row">
                          {chats.map((chat) => (
                            <div key={chat._id} className="col-lg-6 col-xl-4 mb-3">
                              <div className="card">
                                <div className="card-body text-center">
                                  <div className="mb-3">
                                    <img
                                      src={chat.lawyer?.image ? `/uploads/${chat.lawyer.image}` : "/assets/website/images/avatar-1.jpg"}
                                      className="rounded-circle"
                                      width="80"
                                      height="80"
                                      alt={chat.lawyer?.firstName || "Lawyer"}
                                      onError={(e) => {
                                        e.target.src = "/assets/website/images/avatar-1.jpg";
                                      }}
                                    />
                                  </div>
                                  <h6 className="mb-1">
                                    {chat.lawyer?.firstName} {chat.lawyer?.lastName}
                                  </h6>
                                  <p className="text-muted mb-2">
                                    {chat.lawyer?.expertise}
                                  </p>
                                  <p className="text-muted small mb-3">
                                    {chat.lawyer?.practiceArea}
                                  </p>
                                  <div className="d-grid gap-2">
                                    <button 
                                      className="btn btn-primary btn-sm"
                                      onClick={() => handleChatClick(chat._id)}
                                    >
                                      <i className="fas fa-comments me-1"></i>
                                      Continue Chat
                                    </button>
                                    <button 
                                      className="btn btn-outline-secondary btn-sm"
                                      onClick={() => navigate(`/attorney/${chat.lawyer?._id}`)}
                                    >
                                      <i className="fas fa-user me-1"></i>
                                      View Profile
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-5">
                          <i className="fas fa-user-tie text-muted" style={{ fontSize: '4rem' }}></i>
                          <h5 className="mt-3">No Hired Lawyers</h5>
                          <p className="text-muted">
                            You haven't hired any lawyers yet.
                          </p>
                          <button 
                            className="btn btn-primary"
                            onClick={() => navigate('/attorneys')}
                          >
                            <i className="fas fa-search me-2"></i>
                            Find a Lawyer
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History; 