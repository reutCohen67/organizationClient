import React from 'react';
import Moment from 'react-moment';

export const taskItem = ({ user, tasks }) => {
  return (
    <div className='task-sub-wrapper'>
      {!tasks || tasks.length === 0 ? (
        <div>No Tasks ... </div>
      ) : (
        <div>
          {tasks.map((task) => {
            return (
              <div className='task-inner'>
                <div className='task-item'>{task.text}</div>
                <div className='task-item'>
                  <Moment format='MM/DD/YYYY'>{task.dueDate}</Moment>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default taskItem;
