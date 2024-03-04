import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import logo_desk from "./assets/logo-desk.png";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  const handleLogin = () => {
    if (email === '') {
      setEmailError('Please enter your email');
    } else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError('Please enter your password');
    } else {
      setPasswordError('');
    }

    if (email !== '' && password !== '') {
    
      navigate('/Employee');
    }
  };

  return (
    <div className='login_main'>
      <img src={logo_desk} alt='logo'/>
      <p className='logo_head'>We are Electric</p>
      <input
        className='login_input'
        type='text'
        name='email'
        placeholder='E-mail'
        value={email}
        onChange={handleEmailChange}
      />
      {emailError && <p className="error">{emailError}</p>}
      <input
        className='login_input'
        type='password'
        name='password'
        placeholder='Password'
        value={password}
        onChange={handlePasswordChange}
      />
      {passwordError && <p className="error">{passwordError}</p>}
      <button className='login_button' onClick={handleLogin}>Login</button>
      <p className='login_text'>Forgot Password?</p>
    </div>
  );
};

export default Login;
