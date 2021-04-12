import React, { useState } from 'react';
import '../styles/modal.css';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { sendTask } from '../store/task';
import { sendReport } from '../store/report';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import 'react-datepicker/dist/react-datepicker.css';

const Modal = ({ show, setShow, kind, sub }) => {
  const [text, setText] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const {
    user: { user, manager },
    loading,
  } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const handleSave = (e) => {
    e.preventDefault();
    if (text === '') {
      toast.error('Message cannot be empty', {
        position: 'top-center',
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (kind === 'task') {
      const taskdata = {
        text,
        employeeId: sub,
        managerId: user._id,
        dueDate: startDate,
      };
      dispatch(sendTask(taskdata));
    } else {
      const reportdata = {
        text,
        employeeId: user._id,
        managerId: manager._id,
      };
      dispatch(sendReport(reportdata));
    }
    setShow(false);
  };

  return (
    <div className='modal-container'>
      <div className='content'>
        <textarea
          className='textarea'
          placeholder='Type here'
          onChange={(e) => setText(e.target.value)}
        />
        <div className='buttons'>
          <button className='btn' onClick={handleSave}>
            Save
          </button>
          <button className='btn' onClick={() => setShow(false)}>
            Cancel
          </button>
          <div className='due-date'>
            {kind === 'task' && (
              <DatePicker
                className='btn'
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
