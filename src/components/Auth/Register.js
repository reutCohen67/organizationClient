import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../store/user';
import '../../styles/registerLogin.css';

const Register = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    position: '',
    email: '',
    password: '',
    password2: '',
  });

  const {
    firstName,
    lastName,
    email,
    position,
    password,
    password2,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      alert('password did not match');
    } else {
      dispatch(registerUser(formData));
    }
  };

  return (
    <div className='register-container'>
      <div className='register-wrapper'>
        <form>
          <div className='register-inner'>
            <div className='register-item'>
              <input
                type='text'
                placeholder='First Name'
                name='firstName'
                value={firstName}
                onChange={(e) => onChange(e)}
              ></input>
            </div>
            <div className='register-item'>
              <input
                type='text'
                placeholder='Last Name'
                name='lastName'
                value={lastName}
                onChange={(e) => onChange(e)}
              ></input>
            </div>
            <div className='register-item'>
              <input
                type='email'
                placeholder='Email'
                name='email'
                value={email}
                onChange={(e) => onChange(e)}
              ></input>
            </div>
            <div className='register-item'>
              <input
                type='text'
                placeholder='Position'
                name='position'
                value={position}
                onChange={(e) => onChange(e)}
              ></input>
            </div>
            <div className='register-item'>
              <input
                type='password'
                placeholder='Password'
                name='password'
                value={password}
                onChange={(e) => onChange(e)}
              ></input>
            </div>
            <div className='register-item'>
              <input
                type='password'
                placeholder='Password'
                name='password2'
                value={password2}
                onChange={(e) => onChange(e)}
              ></input>
            </div>
          </div>
        </form>
        <div className='register-item'>
          <button className='btn' onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
