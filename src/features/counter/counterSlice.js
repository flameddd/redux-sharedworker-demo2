import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'model',
  initialState: {
    value: 0,
  },
  reducers: {
    ULeft: () => {
      const model = document.querySelector('#modelViewer');
      model.cameraOrbit = '-45deg 45deg 105%';
    },
    URight: () => {
      const model = document.querySelector('#modelViewer');
      model.cameraOrbit = '45deg  45deg 105%';
    },
    BLeft: () => {
      const model = document.querySelector('#modelViewer');
      model.cameraOrbit = '-45deg 125deg 105%';
    },
    BRight: () => {
      const model = document.querySelector('#modelViewer');
      model.cameraOrbit = '45deg 125deg 105%';
    },
  },
});

export const { ULeft } = counterSlice.actions;

export default counterSlice.reducer;
