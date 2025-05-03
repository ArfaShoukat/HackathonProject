import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { supabase } from '../config/Supabase';

const Layout = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {

    const fetchUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };
    fetchUser();


    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (!user && location.pathname === '/DonateBlood') {
      navigate('/signup', { state: { from: location } });
    }
  }, [user, location.pathname, navigate]);

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
