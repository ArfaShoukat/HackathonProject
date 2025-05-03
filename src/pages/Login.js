// import React from 'react';
// import './Auth.css';

// const Login = () => {
//   return (
//     <div className="auth-container">
//       <form className="auth-form">
//         <h2>Login</h2>
//         <input type="email" placeholder="Email" required />
//         <input type="password" placeholder="Password" required />
//         <button type="submit">Login</button>
//         <p>Don't have an account? <a href="/signup">Sign up</a></p>
//       </form>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {supabase} from '../config/Supabase'
import './Auth.css';
import Home from '../pages/Home'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
     
    });

    if (error) {
      alert(error.message);
    } else {
      alert('Successfully logged in!');
      navigate('/DonateBlood'); 
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </form>
    </div>
  );
};

export default Login;
