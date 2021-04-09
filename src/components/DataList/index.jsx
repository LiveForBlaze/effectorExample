import React from 'react';
import { CircularProgress } from '@material-ui/core';

export const DataList = (props) => {
  return (
    <div className="listContainer">
      {
        props.isLoading ? (
          <CircularProgress />
        ) : (
          props.data.map((item) => (
            <div style={{ textAlign: 'left' }}>
              {item.id}: {item.title}
            </div>
          ))
        )
      }
    </div>
  )
}