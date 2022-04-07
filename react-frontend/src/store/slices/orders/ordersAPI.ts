import { store } from '../../store'
import api from '../../../utils/api';
import { selectCurrency } from '../currencies/currenciesSlice';
import { Order } from './ordersModel'

export function fetchOrders() {
  return new Promise<Order[]>(async (resolve) => {
    const response = await api.get<Order[]>('api/orders')
    resolve(response.data)
  })
} 