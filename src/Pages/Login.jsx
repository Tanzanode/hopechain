import React, { useState } from 'react';
import './CSS/LoginSignup.css';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons'; // Import your desired icon

const Login = ({ onLogin, errorMessage }) => {
  // eslint-disable-next-line
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleLogin = async () => {
    try {
      await onLogin(); // Trigger the Internet Identity login
    } catch (error) {
      console.error('Login error:', error); // Log the error for debugging
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>
          <FontAwesomeIcon icon={faLock} style={{ marginRight: '8px' }} />
          Authenticate
        </h1>
        {errorMessage && <div className="error-message">{errorMessage}</div>} {/* Display error message */}
        <button
          onClick={handleLogin}
          style={{
            opacity: isChecked ? 1 : 0.5,
            cursor: isChecked ? 'pointer' : 'not-allowed'
          }}
          disabled={!isChecked}
        >
          Continue with Internet Identity
        </button>
        <p className="loginsignup-login">
          <input
            type="checkbox"
            name=''
            id=''
            onChange={handleCheckboxChange}
          />
          By continuing, I agree to the terms of use & 
          <Link to="/PrivacyPolicy" style={{ textDecoration: 'underline' }}> Privacy Policy. </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
