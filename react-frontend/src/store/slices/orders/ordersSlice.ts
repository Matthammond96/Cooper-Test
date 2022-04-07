import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../../store";
import { fetchOrders } from './ordersAPI'
import { OrdersState, Order } from './ordersModel'

const initialState: OrdersState = {
  loading: false,
  orders: [],
  count: 0,
  value: 0.00,
  currency: 'USD'
}

export const fetchOrdersAsync = createAsyncThunk(
  'orders/fetchOrders',
  async () => {
    const response: Order[] = await fetchOrders();
    return response;
  }
);

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    setOrdersValue: (state: OrdersState, action: PayloadAction<number>) => { state.value = action.payload }
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchOrdersAsync.fulfilled, (state: OrdersState, action: PayloadAction<Order[]>) => {
        state.orders = action.payload
        state.count = action.payload.length        
        state.loading = true
      })
  },
})

// Export Dispatch Reducers 
export const { setOrdersValue } = ordersSlice.actions;

// Export Thunk
export const analyseOrders = () => (dispatch: AppDispatch, getState: () => RootState) => {
  const state = getState()
  const orders = state.orders.orders
  const currencies = state.currencies.currencies
  let total = 0

  orders.forEach((order: Order) => {
    const currentCurrency = currencies.find(c => c.currency === order.baseCurrency)

    if (currentCurrency) {
      total += order.amount * currentCurrency._embedded.price.price
    }
  });

  dispatch(setOrdersValue(total))
} 

// Export Loading Selector
export const selectLoading = (state: RootState): boolean => state.orders.loading

// Export Orders Selectors
export const selectSortedOrders = (state: RootState): Order[] => {
  const sortedOrders: Order[] = [...state.orders.orders].sort((a: Order, b: Order) => b.createdAt - a.createdAt)
  return sortedOrders
}
export const selectOrdersCount = (state: RootState): number => state.orders.count
export const selectOrdersValue = (state: RootState): { value: string, currency: string } => ({value: state.orders.value.toFixed(2), currency: state.orders.currency})

export default ordersSlice.reducer