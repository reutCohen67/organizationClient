import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { getUser } from '../store/user';
import ProfileUserItem from '../components/Users/ProfileUserItem';
import TaskItem from '../components/Users/TaskItem';
import '../styles/user.css';
import Modal from '../components/Modal';

const User = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [subId, setSubId] = useState();
  const { id } = useParams();

  const {
    user: { user, manager, tasks, subs },
    loading,
  } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getUser(id));
  }, [dispatch, id]);

  return (
    <div className='profile-container'>
      {show && <Modal show={show} setShow={setShow} kind='task' sub={subId} />}
      {!user ? (
        <div>No propile yet ... </div>
      ) : (
        <div>
          <ProfileUserItem
            user={user}
            manager={manager}
            key={id}
            kind='report'
          />
        </div>
      )}
      <div className='sub-title'>My tasks:</div>
      <TaskItem key={tasks} user={user} tasks={tasks} />
      <div className='sub-title'>my subordinates:</div>
      <div className='task-sub-wrapper'>
        {!subs || subs.length === 0 ? (
          <div>No subs ... </div>
        ) : (
          <div>
            {subs.map((sub) => {
              return (
                <div className='task-inner'>
                  <div className='task-item'>
                    {sub.firstName + ' ' + sub.lastName}
                  </div>
                  <div className='task-item'> {sub.position}</div>
                  <button
                    className='btn-primary'
                    onClick={() => {
                      setShow(true);
                      setSubId(sub._id);
                    }}
                  >
                    Assign Task
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
