import api from '../../../utils/api';
import { Currency } from './currenciesModel'

export function fetchCurrencies() {
  return new Promise<Currency[]>(async (resolve) => {
    const response = await api.get<Currency[]>('api/currencies-info')
    resolve(response.data)
  })
} 
