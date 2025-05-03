import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../config/Supabase';
import Swal from 'sweetalert2';
import './Auth.css';
import { FiMail, FiLock, FiEye, FiEyeOff } from 'react-icons/fi';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name, // stored in user_metadata
        }
      }
    });

    if (error) {
      if (error.message.includes('already registered')) {
        Swal.fire({
          title: 'User Already Registered',
          text: 'Redirecting to login...',
          icon: 'info',
          timer: 2000,
          showConfirmButton: false
        });
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      } else {
        Swal.fire({
          title: 'Error',
          text: error.message,
          icon: 'error'
        });
      }
    } else {
      Swal.fire({
        title: 'Good job!',
        text: 'Successfully signed up! Please check your email to confirm.',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/login');
      });
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSignup}>
        <h2>Sign Up</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <div className="password-input-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span
            className="password-toggle-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>

        <button type="submit">Sign Up</button>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
