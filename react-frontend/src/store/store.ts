import { configureStore, ThunkAction, Action, createStore } from '@reduxjs/toolkit';
import ordersSlice from './slices/orders/ordersSlice'
import currenciesSlice from './slices/currencies/currenciesSlice';

export const store = configureStore({
  reducer: {
    orders: ordersSlice,
    currencies: currenciesSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
