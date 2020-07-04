import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSharedWorkerMiddleware from '@flameddd/redux-sharedworker';
import counterReducer from '../features/counter/counterSlice';

const shareWorkerMiddleware = createSharedWorkerMiddleware({
  targetActions: [
    'model/ULeft',
    'model/URight',
    'model/BLeft',
    'model/BRight',
  ]
})

export default configureStore({
  reducer: {
    model: counterReducer,
  },
  middleware: getDefaultMiddleware().concat(shareWorkerMiddleware)
});
