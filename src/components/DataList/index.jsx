import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { CircularProgress } from '@material-ui/core';
import { fetchDataFx, $DataStore } from './stores/data';
import { $FetchDataSettings } from '../modals/FetchData/stores/settings';

export const DataList = () => {
  const $dataStore = useStore($DataStore);
  const $fetchDataSettings = useStore($FetchDataSettings);

  useEffect(() => {
    fetchDataFx();
  }, []);

  return (
    <>
      {
        $fetchDataSettings.isLoading ? (
          <CircularProgress />
        ) : (
          $dataStore && $dataStore.map((item) => (
            <div style={{ textAlign: 'left' }}>
              {item.id}: {item.title}
            </div>
          ))
        )
      }
    </>
  )
}