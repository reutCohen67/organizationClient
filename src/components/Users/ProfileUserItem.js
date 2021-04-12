import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/user.css';
import routes from '../../routes.json';
import Modal from '../Modal';

const ProfileUserItem = ({ user, manager }) => {
  const [show, setShow] = useState(false);

  return (
    <div className='profile-item'>
      {show && <Modal show={show} setShow={setShow} kind='report' />}
      <img src={user.avatar} alt='avatar' />
      <div className='data'>
        <div className='data-item'>
          Name: {user.firstName + ' ' + user.lastName}
        </div>
        <div className='data-item'>Position: {user.position}</div>
        <hr />
        <div className='flex data-item'>
          {manager ? (
            <div className='flex'>
              <div>Manager: {manager.firstName + ' ' + manager.lastName}</div>
              <button className='btn-primary' onClick={() => setShow(true)}>
                Report
              </button>
            </div>
          ) : (
            <div>Manager: None</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileUserItem;
