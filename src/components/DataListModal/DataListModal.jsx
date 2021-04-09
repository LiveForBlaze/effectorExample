import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  CircularProgress
} from '@material-ui/core';

export const DataListModal = (props) => {
  const [value, setValue] = useState('');

  return (
    <Dialog
      open={props.isVisible}
      onClose={props.onClose}
    >
      <DialogTitle>Укажите кол-во элементов</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ textAlign: "center"}}>
          {
            props.isLoading ? (
              <CircularProgress />
            ) : (
              <TextField
                onChange={(e) => setValue(e.target.value)}
                value={value}
                variant="outlined"
                fullWidth
              />
            )
          }
        </DialogContentText>
        <DialogActions>
          <Button
            onClick={() => props.onSubmit(value)}
            color="primary"
            variant="contained"
            autoFocus
            disabled={props.isLoading}
          >
            ОК
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}