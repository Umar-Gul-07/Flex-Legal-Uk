import React, { useContext, useEffect, useState } from "react";
import { Store } from "../../Utils/Store";
import { server_ip } from "../../Utils/Data";
import api from "../../Utils/Axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

function LawyerDashboard() {
  const { state } = useContext(Store);
  const { UserInfo } = state;
  const [recentMessages, setRecentMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch recent messages for the lawyer
  useEffect(() => {
    const fetchRecentMessages = async () => {
      try {
        if (UserInfo && UserInfo._id) {
          const { data } = await api.get(`/chat/lawyer/${UserInfo._id}`);
          setRecentMessages(data.slice(0, 5)); // Get last 5 chats
        }
      } catch (error) {
        console.error("Error fetching recent messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentMessages();
  }, [UserInfo]);

  return (
    <>
      <div className="page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="card mx-n4 mt-n4 bg-info-subtle">
                <div className="card-body">
                  <div className="text-center mb-4">
                    {UserInfo?.image ? (
                      <img
                        src={`${server_ip}/${UserInfo.image}`}
                        className="lawimg"
                        alt="User Avatar"
                      />
                    ) : (
                      <img
                        src="/assets/website/images/avatar-1.jpg"
                        className="lawimg"
                        alt="Default Avatar"
                      />
                    )}
                    <h5 className="mt-3 mb-1">
                      {UserInfo?.firstName} {UserInfo?.lastName}
                    </h5>
                    <p className="text-muted mb-3">{UserInfo?.expertise}</p>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <ul className="list-unstyled hstack gap-3 mb-0 flex-grow-1">
                    <li>
                      <i className="bx bx-map align-middle" />{" "}
                      {UserInfo?.address}
                    </li>
                    <li>
                      <i className="bx bx-box align-middle" /> {UserInfo?.email}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body">
                  <ul className="list-unstyled vstack gap-3 mb-0">
                    <li>
                      <div className="d-flex">
                        <i className="bx bx-calendar font-size-18 text-primary" />
                        <div className="ms-3">
                          <h6 className="mb-1 fw-semibold">Experience:</h6>
                          <span className="text-muted">
                            {UserInfo?.expertise}
                          </span>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <i className="bx bx-money font-size-18 text-primary" />
                        <div className="ms-3">
                          <h6 className="mb-1 fw-semibold">Current Salary:</h6>
                          <span className="text-muted">$ 3451</span>
                        </div>
                      </div>
                    </li>

                    <li>
                      <div className="d-flex">
                        <i className="bx bx-user font-size-18 text-primary" />
                        <div className="ms-3">
                          <h6 className="mb-1 fw-semibold">Gender:</h6>
                          Male
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="d-flex">
                        <i className="mdi mdi-book-education font-size-18 text-primary" />
                        <div className="ms-3">
                          <h6 className="mb-1 fw-semibold">Qualification:</h6>
                          <span className="text-muted">
                            {UserInfo?.education}
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-9">
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-3">About Us</h5>
                  <p className="text-muted">
                    Very well thought out and articulate communication. Clear
                    milestones, deadlines and fast work. Patience. Infinite
                    patience. No shortcuts. Even if the client is being
                    careless. Some quick example text to build on the card title
                    and bulk the card's content Moltin gives you platform.
                  </p>
                  <p className="text-muted mb-4">
                    As a highly skilled and successfull product development and
                    design specialist with more than 4 Years of My experience
                    lies in successfully conceptualizing, designing, and
                    modifying consumer products specific to interior design and
                    home furnishings.
                  </p>
                  <h5 className="mb-3">Education</h5>
                  <ul className="verti-timeline list-unstyled">
                    <li className="event-list">
                      <div className="event-timeline-dot">
                        <i className="bx bx-right-arrow-circle" />
                      </div>
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <div>
                            <h6 className="font-size-14 mb-1">
                              {UserInfo?.education}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <h5 className="mb-3">Practise Area</h5>
                </div>
                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <h6 className="font-size-14 mb-1">
                        {UserInfo?.practiceArea}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body border-bottom">
                      <h5 className="mb-3">Social Media</h5>
                      <div className="hstack gap-2">
                        <a href="#!" className="btn btn-soft-primary">
                          <i className="bx bxl-facebook align-middle me-1" />{" "}
                          Facebook{" "}
                        </a>
                        <a href="#!" className="btn btn-soft-info">
                          <i className="bx bxl-twitter align-middle me-1" />{" "}
                          Twitter
                        </a>
                        <a href="#!" className="btn btn-soft-pink">
                          <i className="bx bxl-instagram align-middle me-1" />{" "}
                          Instagram
                        </a>
                        <a href="#!" className="btn btn-soft-success">
                          <i className="bx bxl-whatsapp align-middle me-1" />{" "}
                          Whatsapp
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Messages Section */}
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-body">
                  <h5 className="mb-3">Recent Messages</h5>
                  {loading ? (
                    <div className="text-center">
                      <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : recentMessages.length > 0 ? (
                    <div className="table-responsive">
                      <table className="table table-hover">
                        <thead>
                          <tr>
                            <th>Client</th>
                            <th>Last Message</th>
                            <th>Date</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {recentMessages.map((chat) => (
                            <tr key={chat._id}>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img
                                    src={chat.participants?.find(p => !p.isLawyer)?.image ? 
                                      `${server_ip}/${chat.participants.find(p => !p.isLawyer).image}` : 
                                      "/assets/website/images/avatar-1.jpg"}
                                    className="rounded-circle me-2"
                                    width="40"
                                    height="40"
                                    alt="Client"
                                    onError={(e) => {
                                      e.target.src = "/assets/website/images/avatar-1.jpg";
                                    }}
                                  />
                                  <div>
                                    <h6 className="mb-0">
                                      {chat.participants?.find(p => !p.isLawyer)?.firstName} {chat.participants?.find(p => !p.isLawyer)?.lastName}
                                    </h6>
                                    <small className="text-muted">
                                      {chat.participants?.find(p => !p.isLawyer)?.email}
                                    </small>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span className="text-truncate d-inline-block" style={{ maxWidth: '200px' }}>
                                  {chat.latestMessage?.content || 'No messages yet'}
                                </span>
                              </td>
                              <td>
                                {chat.latestMessage?.createdAt ? 
                                  new Date(chat.latestMessage.createdAt).toLocaleDateString() : 
                                  'N/A'
                                }
                              </td>
                              <td>
                                <Link 
                                  to={`/chat/${chat._id}`}
                                  className="btn btn-sm btn-primary"
                                >
                                  <i className="bx bx-message-square me-1"></i>
                                  Chat
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="text-center text-muted">
                      <i className="bx bx-message-square font-size-48 mb-3"></i>
                      <p>No recent messages</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .lawimg {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        }
      `}</style>
    </>
  );
}

export default LawyerDashboard; 