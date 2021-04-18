import React from 'react';
import '../styles/users.css';
import { Link } from 'react-router-dom';

export const Landing = () => {
  return (
    <div className='container'>
      <h3 className='title'>welcome!</h3>

      <Link to='/users/register' className='btn'>
        Register
      </Link>
      <Link to='/users/login' className='btn'>
        Login
      </Link>
    </div>
  );
};
export default Landing;
