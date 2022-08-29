import { useSelector, useDispatch } from 'react-redux';
import CheckboxList from './CheckboxList';
import InputTask from './InputTask';

import { selectList } from './features/todoList/ToDoListSlice';

const App = () => {
  const list = useSelector(selectList);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <div className='container-main'>
        <div className='todo'>
          <header>
            <h1>ToDO List</h1>
          </header>
          <div className='content-todo'>
            <InputTask />
            <CheckboxList list={list} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
