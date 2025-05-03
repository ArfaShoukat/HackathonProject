// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Auth.css';

// const Signup = () => {
//   const navigate = useNavigate();

//   const handleSignup = (e) => {
//     e.preventDefault();


//     alert('Successfully signed up!');
//     navigate('/login');
//   };

//   return (
//     <div className="auth-container">
//       <form className="auth-form" onSubmit={handleSignup}>
//         <h2>Sign Up</h2>
//         <input type="text" placeholder="Full Name" required />
//         <input type="email" placeholder="Email" required />
//         <input type="password" placeholder="Password" required />
//         <button type="submit">Sign Up</button>
//         <p>Already have an account? <a href="/login">Login</a></p>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {supabase} from '../config/Supabase'
import './Auth.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
    } else {
      alert('Successfully signed up!');
      navigate('/login');
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
        <p>Already have an account? <a href="/login">Login</a></p>
      </form>
    </div>
  );
};

export default Signup;
