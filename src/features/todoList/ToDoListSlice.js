import { createSlice } from '@reduxjs/toolkit';

export const todoListSlice = createSlice({
  name: 'todo list',
  initialState: {
    todos: [
      { id: 1, name: 'task 1', checked: false },
      { id: 2, name: 'task 2', checked: false },
      { id: 3, name: 'task 3', checked: false },
    ],
    inputText: '',
    editText: '',
  },
  reducers: {
    addTask: (state, action) => {
      state.todos.push({
        id: state.todos.length + 1,
        name: action.payload,
        checked: false,
      });
    },
    markAsDone: (state, action) => {
      state.todos.forEach(task => {
        if (task.name === action.payload) {
          task.checked = !task.checked;
        }
      });
    },
    editTask: (state, action) => {
      state.todos.map(task =>
        task.id === action.payload ? (task.name = state.editText) : task
      );
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter(task => task.id !== action.payload);
    },
    setInputText: (state, action) => {
      state.inputText = action.payload;
    },
    setEditText: (state, action) => {
      state.editText = action.payload;
    },
  },
});

export const {
  addTask,
  editTask,
  deleteTask,
  setInputText,
  setEditText,
  markAsDone,
} = todoListSlice.actions;

export const selectList = state => state['todo list'].todos;
export const selectInputText = state => state['todo list'].inputText;
export const selectEditText = state => state['todo list'].editText;

export default todoListSlice.reducer;
