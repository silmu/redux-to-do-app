import { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const CheckboxList = ({ list }) => {
  // const [checked, setChecked] = useState([0]);

  // const handleToggle = task => () => {
  //   const currentIndex = checked.indexOf(task);
  //   const newChecked = [...checked];

  //   if (currentIndex === -1) {
  //     newChecked.push(task);
  //   } else {
  //     newChecked.splice(currentIndex, 1);
  //   }

  //   setChecked(newChecked);
  // };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {list.map(task => {
        const labelId = `checkbox-list-label-${task}`;

        return (
          <ListItem
            key={task}
            secondaryAction={
              <IconButton edge='end' aria-label='comments'>
                <DeleteOutlineIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton
              role={undefined}
              onClick={/*handleToggle(task)*/ () => console.log('Clicked')}
              dense
            >
              <ListItemIcon>
                <Checkbox
                  edge='start'
                  checked={/*checked.indexOf(task) !== -1*/ false}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={task} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CheckboxList;
