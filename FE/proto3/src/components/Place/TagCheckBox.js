import React from 'react';
import Checkbox from '@mui/joy/Checkbox';
import ListItem from '@mui/joy/ListItem';

function TagCheckbox({ item, checked, onChange }) {
  const handleChange = (event) => {
    if (onChange) {
      onChange(item, event.target.checked);
    }
  };

  return (
    <ListItem>
      <Checkbox
        checked = {checked}
        overlay
        disableIcon
        variant="soft"
        label={item}
        onChange={handleChange}
      />
    </ListItem>
  );
}

export default TagCheckbox;