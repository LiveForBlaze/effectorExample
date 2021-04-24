import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { DataListModal } from './components/DataListModal/DataListModal';
import { DataList } from './components/DataList';
import './App.css';

import { setModalVisibility, getData } from './store';


function App() {
  const isVisible = useSelector((state) => state.modal.value);
  const { isLoading, data } = useSelector((state) => state.list.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Button
        color='primary'
        variant='contained'
        onClick={() => dispatch(setModalVisibility(true))}
      >
        Открыть модальное окно
      </Button>

      <DataListModal
        isVisible={isVisible}
        isLoading={isLoading}
        onSubmit={(num) => dispatch(getData(num))}
        onClose={() => dispatch(setModalVisibility(false))}
      />

      <DataList
        isLoading={isLoading}
        data={data}
      />
    </div>
  );
}

export default App;
