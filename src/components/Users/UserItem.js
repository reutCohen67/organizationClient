import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/users.css';
import routes from '../../routes.json';

export const UserItem = ({ data }) => {
  return (
    <div className='wrapper'>
      <div className='inner'>
        <div className='item'>{data.firstName + ' ' + data.lastName}</div>
        <div className='item'>{data.position}</div>
        <div className='item'>
          <Link className='btn' to={`${routes.USERS}/${data._id}`}>
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
