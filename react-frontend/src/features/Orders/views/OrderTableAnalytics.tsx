import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { selectOrdersCount, selectOrdersValue, analyseOrders } from '../../../store/slices/orders/ordersSlice'
import styles from '../Orders.module.sass'

export function OrderTableAnalytics () {
  const ordersCount = useAppSelector(selectOrdersCount)
  const ordersValue = useAppSelector(selectOrdersValue)

  const dispatch = useAppDispatch()
  dispatch(analyseOrders())

  return (
    <div className={styles.tableAnalytics}>
      <Analytic title="All orders" value={ordersCount} />
      <Analytic title="Total amount" value={`${ordersValue.value.replace(/\B(?=(\d{3})+(?!\d))/g, ",")} ${ordersValue.currency}`} />
    </div>
  )
}

const Analytic = ({title, value}: {title: string, value: number | string }) => (
  <div className={styles.TableAnalyticItem}>
    <p className="small">{title}</p>
    <h4>{value}</h4>
  </div>
)