import React, { useState } from 'react';
import { useStore } from 'effector-react'; // добавится во время лайв кодинга
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
import { setIsFetchDataVisible, $FetchDataSettings } from './stores/settings'; // добавится во время лайв кодинга
import { fetchDataFx } from '../../DataList/stores/data'; // добавится во время лайв кодинга

export const FetchData = () => {
  const [value, setValue] = useState('');
  const $fetchDataSettings = useStore($FetchDataSettings); // добавится во время лайв кодинга

  console.log($fetchDataSettings)

  return (
    <Dialog
      open={$fetchDataSettings.isVisible}  // добавится во время лайв кодинга
      onClose={() => setIsFetchDataVisible(false)} // добавится во время лайв кодинга
    >
      <DialogTitle>Укажите кол-во элементов</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ textAlign: "center"}}>
          {
            $fetchDataSettings.isLoading ? (
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
            onClick={() => fetchDataFx(value)}  // добавится во время лайв кодинга
            color="primary"
            variant="contained"
            autoFocus
            disabled={$fetchDataSettings.isLoading}
          >
            ОК
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
}