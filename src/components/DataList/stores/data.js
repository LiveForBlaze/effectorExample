import { createStore, createEffect } from 'effector';
import { wait } from '../../helpers/wait';

// Эффект получения данных с сервера
export const fetchDataFx = createEffect((number = 3) =>
  fetch(`https://jsonplaceholder.typicode.com/todos?_start=0&_limit=${number}`)
    .then(response => wait(5000, response.json()))
);

// Хранилище, которое следит за событием fetchDataFx
export const $DataStore = createStore([])
  .on(fetchDataFx.done, (_, payload) => payload.result || [] );