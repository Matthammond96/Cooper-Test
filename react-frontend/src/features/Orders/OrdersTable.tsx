import React, { useEffect, useMemo } from 'react';
import { OrderTableTitle, OrderTableAnalytics, OrderTableLine } from './views'
import styles from './Orders.module.sass'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchOrdersAsync, selectSortedOrders, selectLoading } from '../../store/slices/orders/ordersSlice';
import { Loading } from './views/helper/Loading';
import { Order } from '../../store/slices/orders/ordersModel';


function OrdersTable() {
  const dispatch = useAppDispatch()
  const loadingStatus = useAppSelector(selectLoading)
  const orders = useAppSelector(selectSortedOrders)
  const tableStructure  = useMemo(() => {
    return [
      {title:"Date", alignRight: false}, 
      {title:"Action", alignRight: false},
      {title: "Account", alignRight: false},
      {title: "Currency", alignRight: false},
      {title: "Amount", alignRight: true},
      {title: "Action", alignRight: true}
    ]
  }, [])

  useEffect(() => {
    dispatch(fetchOrdersAsync())
  }, []);

  const renderOrders = () => orders.map((order: Order) => (
    <OrderTableLine order={order} key={order.orderId} />
  ));

  return (
    <div className={styles.tableContainer}>
      <OrderTableTitle title={"Transactions"} />
      <OrderTableAnalytics />
        <table className={styles.ordersTable}>
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              {tableStructure.map((heading, key) => (
              <th key={ key }>
                <p className={heading.alignRight ? styles.rightAlignItem : ""}>{heading.title}</p>
              </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loadingStatus && orders.length > 0 && renderOrders() }
          </tbody>
        </table>
        {!loadingStatus ? <Loading /> : orders.length === 0 && (
          <div className={styles.loadingContainer}>
            <p>No transactions found</p>
          </div>
        )}
    </div>
  );
}

export default OrdersTable;
