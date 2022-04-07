
export interface CurrenciesState {
  currencies: Currency[]
}

export type Currency = {
  currency: string
  mainCurrency: string
  name: string
  fiat: boolean
  confirmations: number
  decimal: number
  tags: string[]
  feesLevels: [
    {
      feeLevel: string
      value: number
    }
  ]
  extra: {}
  explorerUrl: string
  _embedded: {
    price: {
      baseCurrency: string
      quoteCurrency: string
      price: number
    }
  }
}