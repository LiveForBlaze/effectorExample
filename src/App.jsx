import React from 'react';
import { Button } from '@material-ui/core';
import { FetchData } from './components/modals/FetchData/FetchData'; // добавится во время лайв кодинга
import { setIsFetchDataVisible } from './components/modals/FetchData/stores/settings'; // добавится во время лайв кодинга
import { DataList } from './components/DataList'; // добавится во время лайв кодинга
import './App.css';

function App() {
  return (
    <div className="App">

      <Button
        color='primary'
        variant='contained'
        onClick={() => setIsFetchDataVisible(true)} // добавится во время лайв кодинга
      >
        Открыть модальное окно
      </Button>

      <FetchData />

      {/* добавится во время лайв кодинга:  */}
      <div className="listContainer">
        <DataList />
      </div>

    </div>
  );
}

export default App;
