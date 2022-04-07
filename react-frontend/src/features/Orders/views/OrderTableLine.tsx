import { selectCurrency } from '../../../store/slices/currencies/currenciesSlice'
import { useSelector } from 'react-redux';
import { CoinLineItem } from './helper/CoinLineItem';
import { DateItem } from './helper/DateItem'
import { ActionItem } from './helper/ActionItem'
import { Order } from '../../../store/slices/orders/ordersModel';
import { Button } from './helper/Button'
import styles from '../Orders.module.sass'
import React from 'react';

interface OrderTableLineProps {
  order: Order
}

export function OrderTableLine ({order}: OrderTableLineProps) {
  const { amount, baseCurrency, createdAt, orderId, orderStatus, orderType, portfolioName, quoteAmount, quoteCurrency } = order
  const currentCurrency = useSelector(selectCurrency(baseCurrency))
  const exchangeCurreny = useSelector(selectCurrency(quoteCurrency))
  const date: Date = new Date(createdAt * 1)

  return (
    <tr id={orderId}>
      <td className={styles.orderTableSelectContainer}>
        <input type="checkbox" />
      </td>
      <td>
        <DateItem date={date} />
      </td>
      <td>
        <ActionItem type={orderType} date={date} />
      </td>
      <td>
        <p>{portfolioName}</p>
      </td>
      <td>
        <div className={styles.OrdersItemCurreny}>
          {currentCurrency && <CoinLineItem currency={currentCurrency} />}
          {exchangeCurreny && <CoinLineItem currency={exchangeCurreny} />}
        </div>
      </td>
      <td>
        <p className={styles.rightAlignItem}>{orderType === "buy" ? "+" : "-"} {amount} <span className="small">{baseCurrency}</span></p>
        <p className={`${styles.rightAlignItem} small`}>{orderType === "buy" ? "-" : "+"}{quoteAmount} {quoteCurrency}</p>
      </td>
      <td>
        <div className={styles.orderItemButtonContainer}>
          {orderStatus === "executed" ? (
            <p>Completed</p>
          ) : (
            <React.Fragment>
              <Button title={"Reject"} accent={true} />             
              <Button title={"Approve"} />
            </React.Fragment>
          )}
        </div>
      </td>
    </tr>
  )
}

export default OrderTableLine