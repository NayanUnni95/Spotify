import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        widows: '100dvw',
        height: '100dvh',
        color: 'white',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <h2>404 - Page Not Found...</h2>
      <button
        style={{
          margin: '1rem',
          color: '#000000',
          backgroundColor: '#1db954',
          cursor: 'pointer',
          border: 'none',
          borderRadius: '2rem',
          padding: '1rem',
          fontSize: 'medium',
        }}
        onClick={() => navigate('/')}
      >
        Back to Home
      </button>
    </div>
  );
  i;
}

export default NotFound;
