import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { wait } from './components/helpers/wait';


// Отображение модального окна
export const modalVisibilitySlice = createSlice({
  name: 'modalVisibility',
  initialState: {
    value: false,
  },
  reducers: {
    setModalVisibility: (state, action) => {
      state.value = action.payload
    },
  },
})

// Получение данных
export const dataSlice = createSlice({
  name: 'todoList',
  initialState: {
    value: {
      data: [],
      isLoading: false
    },
  },
  reducers: {
    setFetchedData: (state, action) => {
      state.value.data = action.payload
    },
    setLoading: (state, action) => {
      state.value.isLoading = action.payload
    },
  },
})

export const { setModalVisibility } = modalVisibilitySlice.actions;
const { setLoading, setFetchedData } = dataSlice.actions;

export const getData = (number = 3) => (dispatch) => {
  dispatch(setLoading(true));
  fetch(`https://jsonplaceholder.typicode.com/todos?_start=0&_limit=${number}`)
    .then(response => wait(5000, response.json()))
    .then(resp => dispatch(setFetchedData(resp)))
    .finally(() => dispatch(setLoading(false)));
}

export default configureStore({
  reducer: {
    modal: modalVisibilitySlice.reducer,
    list: dataSlice.reducer
  }
})