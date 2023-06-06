import { createReducer } from '@reduxjs/toolkit';
import { addTask, toggleTask, deleteTask } from './actions';

const initialState = {
  tasks: [],
};

const tasksReducer = createReducer(initialState, {
  [addTask]: (state, action) => {
    state.tasks.push(action.payload);
  },
  [toggleTask]: (state, action) => {
    const task = state.tasks.find((task) => task.id === action.payload);
    if (task) {
      task.completed = !task.completed;
    }
  },
  [deleteTask]: (state, action) => {
    state.tasks=[];
  },
});

export default tasksReducer;

