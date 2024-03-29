import React, { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
// import './RegistrationForm.css'; // Assuming you have a separate CSS file for styling

const RegistrationForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      if (response.ok) {
        console.log('User registered successfully!');
        // Reset form fields after successful registration
        setUsername('');
        setPassword('');
      } else {
        console.error('Failed to register user:', response.statusText);
        // Handle error, show message to user, etc.
      }
    } catch (error) {
      console.error('Error occurred during registration:', error);
      // Handle error, show message to user, etc.
    }
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <div className="input_box">
          <input type="text" placeholder='Username' value={username} onChange={handleUsernameChange} required />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input type="password" placeholder='Password' value={password} onChange={handlePasswordChange} required />
          <FaLock className='icon' />
        </div>
        <button type='submit'>Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
