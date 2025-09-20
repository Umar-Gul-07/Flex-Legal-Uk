import React, { useState, useEffect, useContext } from 'react';
import { Helmet } from 'react-helmet';
import PageTitle from './include/PageTitle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import api from '../../Utils/Axios';
import { toast } from 'react-toastify';
import { server_ip } from '../../Utils/Data';
import { Store } from '../../Utils/Store';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function Attorneys({ title }) {
    const { state } = useContext(Store);
    const { UserInfo } = state;
    const navigate = useNavigate();
    const [attorneys, setAttorneys] = useState([]);
    const [filteredAttorneys, setFilteredAttorneys] = useState([]);
    const [loading, setLoading] = useState(true);
    const query = useQuery();
    const searchTerm = query.get("search") || "";

    // Check authentication on component mount
    useEffect(() => {
        const checkAuth = () => {
            const userFromStorage = localStorage.getItem("UserInfo");
            if (!userFromStorage) {
                toast.error("Please login to view attorneys");
                navigate('/login');
                return false;
            }
            return true;
        };

        if (!checkAuth()) return;
        get_all_attorneys();
    }, [navigate]);

    const get_all_attorneys = async () => {
        try {
            const { data } = await api.get(`/lawyer/verified`);
            if (data.success && Array.isArray(data.lawyers)) {
                setAttorneys(data.lawyers);
                filterAttorneys(data.lawyers, searchTerm);
            } else {
                toast.error('Unexpected response format');
            }
        } catch (error) {
            toast.error(error.message || 'Failed to fetch attorneys');
        } finally {
            setLoading(false);
        }
    };

    const filterAttorneys = (attorneys, searchTerm) => {
        const filtered = attorneys.filter((attorney) => {
            const lowercaseFilter = searchTerm.toLowerCase();
            const fullName = `${attorney.firstName} ${attorney.lastName}`.toLowerCase();
            const practiceArea = (attorney.practiceArea || "").toLowerCase();
            const expertise = (attorney.expertise || "").toLowerCase();
            const address = (attorney.address || "").toLowerCase();

            return (
                fullName.includes(lowercaseFilter) ||
                practiceArea.includes(lowercaseFilter) ||
                expertise.includes(lowercaseFilter) ||
                address.includes(lowercaseFilter)
            );
        });

        setFilteredAttorneys(filtered);
    };

    useEffect(() => {
        filterAttorneys(attorneys, searchTerm);
    }, [searchTerm, attorneys]);

    // Don't render if not authenticated
    if (!localStorage.getItem("UserInfo")) {
        return <div>Redirecting to login...</div>;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Helmet><title>{title}</title></Helmet>
            <PageTitle title={title} showSearchBar={true} />
            <div className="attorney-list-section" style={{ background: '#f4f6fa', minHeight: '100vh', padding: '2rem 0' }}>
                <div className="container">
                    <div className="row gy-4 gx-4 justify-content-center">
                        {filteredAttorneys.length > 0 ? (
                            filteredAttorneys.map((attorney) => (
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 d-flex" key={attorney._id}>
                                    <div className="attorney-card flex-fill shadow-sm bg-white rounded-4 p-0 d-flex flex-column h-100" style={{ transition: 'box-shadow 0.2s', border: '1.5px solid #e0e7ef', minHeight: 420 }}>
                                        <div className="attorney-card-img" style={{ height: 220, borderTopLeftRadius: '1.2rem', borderTopRightRadius: '1.2rem', overflow: 'hidden', background: '#f8f9fa', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <img
                                                src={attorney.image ? `${server_ip}/${attorney.image}` : "/assets/website/images/avatar-1.jpg"}
                                                alt={attorney.firstName}
                                                style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 180 }}
                                                onError={e => { e.target.src = "/assets/website/images/avatar-1.jpg"; }}
                                            />
                                        </div>
                                        <div className="p-3 d-flex flex-column flex-grow-1">
                                            <h5 className="fw-bold mb-1" style={{ color: '#2d7aee', fontSize: '1.18rem' }}>{attorney.firstName} {attorney.lastName}</h5>
                                            <div className="mb-1" style={{ color: '#6c757d', fontWeight: 500, fontSize: '1.01rem' }}>{attorney.expertise || attorney.practiceArea || 'Attorney'}</div>
                                            <div className="mb-2" style={{ color: '#888', fontSize: '0.98rem' }}>
                                                <i className="fas fa-map-marker-alt me-1" style={{ color: '#2d7aee' }}></i>
                                                {attorney.address || 'Location not specified'}
                                            </div>
                                            {attorney.bio && (
                                                <div className="mb-2" style={{ color: '#555', fontSize: '0.97rem', minHeight: 40, maxHeight: 48, overflow: 'hidden', textOverflow: 'ellipsis' }}>{attorney.bio}</div>
                                            )}
                                            <div className="mt-auto d-flex gap-2">
                                                <Link to={`/attorney-details?data=${encodeURIComponent(JSON.stringify(attorney))}`} className="btn btn-outline-primary flex-fill" style={{ borderRadius: '1.2rem', fontWeight: 600, fontSize: '1.01rem' }}>
                                                    View Profile
                                                </Link>
                                                <Link to={`/chat/${attorney.chatId || ''}`} className="btn btn-primary flex-fill" style={{ borderRadius: '1.2rem', fontWeight: 600, fontSize: '1.01rem' }}>
                                                    <i className="fas fa-comment-dots me-1"></i> Message
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12">
                                <p className='text-danger text-center'>No Attorneys Found</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <style>{`
                .attorney-card:hover {
                    box-shadow: 0 8px 32px rgba(44, 62, 80, 0.13), 0 1.5px 8px rgba(44,62,80,0.07);
                    border-color: #2d7aee;
                    transform: translateY(-4px) scale(1.02);
                }
                .attorney-card-img img {
                    transition: transform 0.25s;
                }
                .attorney-card:hover .attorney-card-img img {
                    transform: scale(1.04);
                }
                @media (max-width: 991px) {
                    .attorney-card-img { height: 180px; }
                }
                @media (max-width: 767px) {
                    .attorney-card-img { height: 140px; }
                }
            `}</style>
        </>
    );
}

export default Attorneys;
