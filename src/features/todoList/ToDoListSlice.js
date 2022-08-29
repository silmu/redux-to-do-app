import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
  name: 'todo list',
  initialState: {
    value: ['task 1', 'task 2', 'task 3'],
  },
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addTask } = todoListSlice.actions;

export const selectList = state => state['todo list'].value;

export default todoListSlice.reducer;
