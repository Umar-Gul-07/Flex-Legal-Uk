import React from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { FaGavel, FaUser } from "react-icons/fa";

function RoleSelection() {
  const navigate = useNavigate();

  const handleSelect = (role) => {
    navigate(`/registration?role=${role}`);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f6fa' }}>
      <Helmet><title>Choose Registration Role</title></Helmet>
      <div style={{ background: 'white', padding: '2.5rem 2rem', borderRadius: '1.5rem', boxShadow: '0 0 32px rgba(0,0,0,0.10)', textAlign: 'center', minWidth: 350 }}>
        <h2 style={{ marginBottom: '1.5rem', fontWeight: 700, fontSize: '2rem' }}>
          How do you want to register?
        </h2>
        <p style={{ color: '#666', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
          Please select your role to continue:
        </p>
        <div style={{ display: 'flex', gap: '2.5rem', justifyContent: 'center', marginBottom: '2.5rem' }}>
          {/* Lawyer Card */}
          <div
            onClick={() => handleSelect('lawyer')}
            style={{
              cursor: 'pointer',
              background: '#f8fafc',
              borderRadius: '1rem',
              padding: '2rem 1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              transition: 'box-shadow 0.2s, transform 0.2s',
              border: '2px solid #e0e7ef',
              flex: 1,
              maxWidth: 220,
              minWidth: 180,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseOver={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)'}
            onMouseOut={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'}
          >
            <FaGavel size={56} color="#2d7aee" style={{ marginBottom: 18 }} />
            <div style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: 6 }}>Lawyer</div>
            <div style={{ color: '#888', fontSize: '0.98rem' }}>Register as a legal professional</div>
          </div>
          {/* User Card */}
          <div
            onClick={() => handleSelect('user')}
            style={{
              cursor: 'pointer',
              background: '#f8fafc',
              borderRadius: '1rem',
              padding: '2rem 1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              transition: 'box-shadow 0.2s, transform 0.2s',
              border: '2px solid #e0e7ef',
              flex: 1,
              maxWidth: 220,
              minWidth: 180,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseOver={e => e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)'}
            onMouseOut={e => e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'}
          >
            <FaUser size={56} color="#00b894" style={{ marginBottom: 18 }} />
            <div style={{ fontWeight: 600, fontSize: '1.2rem', marginBottom: 6 }}>User</div>
            <div style={{ color: '#888', fontSize: '0.98rem' }}>Register as a client seeking legal help</div>
          </div>
        </div>
        <div style={{ marginTop: '1.5rem', color: '#888', fontSize: '1rem' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginRight: 18 }}>
            <FaGavel color="#2d7aee" /> <span>represents <b>Lawyer</b></span>
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <FaUser color="#00b894" /> <span>represents <b>User</b></span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default RoleSelection; 