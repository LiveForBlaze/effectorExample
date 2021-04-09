import React from 'react';
import { Button } from '@material-ui/core';
import { DataListModal } from './components/DataListModal/DataListModal';
import { DataList } from './components/DataList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Button
        color='primary'
        variant='contained'
        onClick={console.log}
      >
        Открыть модальное окно
      </Button>

      <DataListModal
        isVisible={false}
        isLoading={false}
        onSubmit={console.log}
        onClose={console.log}
      />

      <DataList
        isLoading={false}
        data={[]}
      />
    </div>
  );
}

export default App;
