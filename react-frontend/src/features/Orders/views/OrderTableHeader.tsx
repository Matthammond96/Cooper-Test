import styles from '../Orders.module.sass'

export const OrderTableTitle = ({title}: {title: string}) => (
  <header className={styles.tableTitle}>
    <h1 className="Title-1">{title}</h1>
  </header>
)