export type Order = {
  orderId: string,
  orderStatus: string,
  orderType: "sell" | "buy",
  portfolioName: string,
  amount: number,
  baseCurrency: string,
  quoteAmount: string,
  quoteCurrency: string
  createdAt: number
}

export interface OrdersState {
  loading: boolean
  orders: Order[]
  count: number
  value: number
  currency: string
}