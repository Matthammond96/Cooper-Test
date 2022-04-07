import React, { useEffect } from 'react';
import './styles/App.css';
import OrdersTable from './features/Orders/OrdersTable';
import { useAppDispatch } from './store/hooks';
import { fetchCurrenciesAsync } from './store/slices/currencies/currenciesSlice';

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchCurrenciesAsync())
  }, [dispatch])

  return (
    <div className="App">
      <OrdersTable />
    </div>
  );
}

export default App;
