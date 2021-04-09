import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { fetchDataFx, $DataStore } from './stores/data';

export const DataList = () => {
  const $dataStore = useStore($DataStore);

  useEffect(() => {
    fetchDataFx();
  }, []);

  return (
    <>
      {
        $dataStore && $dataStore.map((item) => (
          <div style={{ textAlign: 'left' }}>
            {item.id}: {item.title}
          </div>
        ))
      }
    </>
  )
}