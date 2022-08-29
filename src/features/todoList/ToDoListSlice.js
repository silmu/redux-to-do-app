import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
  name: 'todo list',
  initialState: {
    value: [
      { name: 'task 1', checked: false },
      { name: 'task 2', checked: false },
      { name: 'task 3', checked: false },
    ],
    inputText: '',
  },
  reducers: {
    addTask: (state, action) => {
      state.value.push({ name: action.payload, checked: false });
    },
    markAsDone: (state, action) => {
      state.value.forEach(task => {
        if (task.name === action.payload) {
          task.checked = !task.checked;
        }
      });
    },
    deleteTask: (state, action) => {
      state.value = state.value.filter(task => task.name !== action.payload);
    },
    setInputText: (state, action) => {
      state.inputText = action.payload;
    },
  },
});

export const { addTask, deleteTask, setInputText, markAsDone } =
  todoListSlice.actions;

export const selectList = state => state['todo list'].value;
export const selectInputText = state => state['todo list'].inputText;

export default todoListSlice.reducer;
