import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';


const CodeTemplate = ({ title, description, code }) => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial, sans-serif' }}>
      <button
        onClick={() => navigate('/')}
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: '#1976d2',
          color: '#fff',
          border: 'none',
          borderRadius: '6px',
          padding: '6px 12px',
          cursor: 'pointer',
          fontSize: '14px',
          marginBottom: '20px',
          gap: '8px' 
        }}
      >
        <FaArrowLeft />
        <span>Back</span>
      </button>
      <center>
        <h1 style={{ color: '#1976d2' }}>{title}</h1>
      </center>

      <div style={{
        margin: '20px auto',
        maxWidth: '800px',
        fontSize: '17px',
        color: '#444',
        lineHeight: '1.6',
        backgroundColor: '#f0f8ff',
        padding: '15px 20px',
        borderRadius: '8px',
        border: '1px solid #cce7ff'
      }}>
        <p><strong>Description:</strong></p>
        <p>{description}</p>
      </div>
      <div style={{
        backgroundColor: '#272822',
        color: '#f8f8f2',
        padding: '20px',
        borderRadius: '10px',
        maxWidth: '800px',
        margin: '30px auto',
        position: 'relative',
        fontSize: '16px',
        overflowX: 'auto',
        border: '1px solid #444'
      }}>
        <button
          onClick={handleCopy}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: '#1976d2',
            color: '#fff',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px'
          }}
        >
          {copied ? 'Copied!' : 'Copy Code'}
        </button>
        <pre style={{ margin: 0 }}>
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
};

export default CodeTemplate;
