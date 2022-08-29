import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
  name: 'todo list',
  initialState: {
    value: ['task 1', 'task 2', 'task 3'],
    inputText: '',
  },
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload);
    },
    setInputText: (state, action) => {
      state.inputText = action.payload;
    },
  },
});

export const { addTask, setInputText } = todoListSlice.actions;

export const selectList = state => state['todo list'].value;
export const selectInputText = state => state['todo list'].inputText;

export default todoListSlice.reducer;
