import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTask } from './actions';
import Task from './tasks';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleToggleTask = (taskId) => {
    dispatch(toggleTask(taskId));
  };
 

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task} onToggle={handleToggleTask}  />
      ))}
    </>
  );
};

export default TaskList;
