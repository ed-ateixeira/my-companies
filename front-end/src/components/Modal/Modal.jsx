import { useContext } from 'react';

import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';

import { GlobalContext } from '../../contexts/Global.context';

export function Modal({
  children,
  open = false,
  title = '',
  onClose,
  onFinish,
  cancelButtonText,
  concludeButtonText
}) {
  const { closeModal } = useContext(GlobalContext);

  function handleClose() {
    if (onClose) onClose();
    else closeModal();
  }

  function handleFinish() {
    if (onFinish) onFinish();
  }

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll='paper'
      disableEscapeKeyDown
    >
      <DialogTitle>{title}</DialogTitle>
      {children}
      {(!!cancelButtonText || !!concludeButtonText) && (
        <DialogActions>
          {cancelButtonText && (
            <Button onClick={handleClose} variant='outlined'>{cancelButtonText}</Button>
          )}
          {concludeButtonText && (
            <Button onClick={handleFinish} variant='contained'>{concludeButtonText}</Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
}
