import React, { useState } from 'react';
import { signInWithEmailAndPassword } from '../firebase';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Login = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();  // Initialize useNavigate
 
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCredential.user);
    } catch (error) {
      setError(error.message);
    }
  };

  // Navigate to the sign up page
  const goToSignUp = () => {
    navigate('/signup');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
      
      {/* Button to navigate to the signup page */}
      <button onClick={goToSignUp}>Go to Sign Up</button>
    </div>
  );
};

export default Login;
