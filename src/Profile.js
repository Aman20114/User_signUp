import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {clearUser} from "./store"

const Profile=()=> {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    // Check if the user is not authenticated (access token is not available)
    if (!user.accessToken) {
      navigate('/signup');
      
    }
  }, [user, navigate]);

  useEffect(() => {
    console.log(user)
    if (user.accessToken && window.location.pathname === '/signup') {
      // Redirect to profile page if the user has an access token and tries to access the signup page
      window.location.href = '/profile';
    }
  }, [user]);

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('user');

    dispatch(clearUser())

    // Redirect to signup page
    navigate('/signup');
  };

  return (
    <div className='profile-container'>
      <h1>Profile</h1>
      <h1>Full Name: {user.name}</h1>
      <h1>Email: {user.email}</h1>
      <h1>Password: {user.password}</h1>

     
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;