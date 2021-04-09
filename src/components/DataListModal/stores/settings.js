import { createStore, createEvent } from 'effector';
import { fetchDataFx } from '../../DataList/stores/data';

// Событие event для изменения хранилища
export const setIsFetchDataVisible = createEvent();

// Хранилище, которое следит за событием setIsFetchDataVisible
export const $DataListModalSettings = createStore({ isVisible: false })
  .on(setIsFetchDataVisible, (state, payload) => ({ ...state, isVisible: payload }))
  .on(fetchDataFx.pending, (state, payload) => ({ ...state, isLoading: payload }))
  .reset(fetchDataFx.done);