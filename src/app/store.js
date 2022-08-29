import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todoList/ToDoListSlice';

export default configureStore({
  reducer: {
    'todo list': todoReducer,
  },
});
