import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserItem from '../components/Users/UserItem';
import { getAllUsers } from '../store/user';
import '../styles/users.css';

const Users = () => {
  const dispatch = useDispatch();

  const {
    users: { users },
    loading,
  } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAllUsers());
  }, []);
  return (
    <div className='container'>
      {!users ? (
        <div>No users ... </div>
      ) : (
        <div>
          <div className='title'>Employee List</div>
          {users.map((user) => {
            return <UserItem data={user} key={user._id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Users;
