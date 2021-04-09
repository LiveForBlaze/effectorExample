import React, { useEffect } from 'react';
import { useStore } from 'effector-react'; // добавится во время лайв кодинга
import { Button } from '@material-ui/core';
import { DataListModal } from './components/modals/DataListModal/DataListModal';
import { setIsFetchDataVisible } from './components/DataListModal/stores/settings'; // добавится во время лайв кодинга
import { DataList } from './components/DataList';
import { $DataListModalSettings } from './components/DataListModal/stores/settings';
import { fetchDataFx, $DataStore } from './components/DataList/stores/data' // добавится во время лайв кодинга
import './App.css';

function App() {
  const { isVisible, isLoading } = useStore($DataListModalSettings); // добавится во время лайв кодинга
  const $dataStore = useStore($DataStore); // добавится во время лайв кодинга

  useEffect(() => {
    fetchDataFx();
  }, []);

  return (
    <div className="App">
      <Button
        color='primary'
        variant='contained'
        onClick={() => setIsFetchDataVisible(true)} // добавится во время лайв кодинга, по умолчанию console.log
      >
        Открыть модальное окно
      </Button>

      <DataListModal
        isVisible={isVisible} // добавится во время лайв кодинга, по умолчанию false
        isLoading={isLoading} // добавится во время лайв кодинга, по умолчанию false
        onSubmit={fetchDataFx} // добавится во время лайв кодинга, по умолчанию console.log
        onClose={() => setIsFetchDataVisible(false)} // добавится во время лайв кодинга, по умолчанию console.log
      />

      <DataList
        isLoading={isLoading} // добавится во время лайв кодинга, по умолчанию false
        data={$dataStore} // добавится во время лайв кодинга, по умолчанию []
      />
    </div>
  );
}

export default App;
