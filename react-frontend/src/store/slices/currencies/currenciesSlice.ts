import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../store"
import { fetchCurrencies } from './currenciesAPI'
import { Currency, CurrenciesState } from './currenciesModel'

const initialState: CurrenciesState = {
  currencies: []
}

export const fetchCurrenciesAsync = createAsyncThunk(
  'currencies/fetchCurrencies',
  async () => {
    const response: Currency[] = await fetchCurrencies();
    return response;
  }
);

export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchCurrenciesAsync.fulfilled, (state: CurrenciesState, action: PayloadAction<Currency[]>) => {
        state.currencies = action.payload
      }
    )
  }
})

// Export Currency Selectors
export const selectCurrencies = (state: RootState): Currency[] => state.currencies.currencies
export const selectCurrency = (id: string) => (state: RootState): Currency | null => {
  const currency: Currency[] = state.currencies.currencies.filter((c: Currency) => c.currency === id)

  if (currency) return currency[0]

  return null
}

export default currenciesSlice.reducer