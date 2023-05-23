import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

export function Dropdown(props) {
  const { items = [], id = '' } = props;

  const anchorElementId = 'dropdownAnchorEl-' + id;

  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }


  function handleItemClick(onClickFn) {
    handleClose();

    if (onClickFn) onClickFn();
  };

  return (
    <>
      <IconButton id={anchorElementId} size='small' onClick={handleOpen}>
        <FontAwesomeIcon icon={faEllipsisH} />
      </IconButton>
      <Menu
        anchorEl={document.getElementById(anchorElementId)}
        open={open}
        onClose={handleClose}
      >
        {items.map((item) => (
          <MenuItem key={item.label} onClick={() => handleItemClick(item.onClick)}>{item.label}</MenuItem>
        ))}
      </Menu>
    </>
  )
}
