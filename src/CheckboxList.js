import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useDispatch } from 'react-redux';
import { deleteTask, markAsDone } from './features/todoList/ToDoListSlice';

const CheckboxList = ({ list }) => {
  const dispatch = useDispatch();

  const handleToggleCheck = taskName => {
    dispatch(markAsDone(taskName));
  };

  const handleDeleteTask = task => {
    dispatch(deleteTask(task.name));
  };
  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {list.map(task => {
        const labelId = `checkbox-list-label-${task.name}`;

        return (
          <ListItem
            key={task.name}
            secondaryAction={
              <IconButton
                edge='end'
                aria-label='comments'
                onClick={() => handleDeleteTask(task)}
              >
                <DeleteOutlineIcon sx={{ color: '#af7eeb' }} />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={() => handleToggleCheck(task.name)}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge='start'
                  checked={task.checked}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  sx={{ color: '#af7eeb' }}
                  color='secondary'
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={task.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CheckboxList;
