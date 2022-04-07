import styles from '../../Orders.module.sass'

interface ActionItemProps {
  type: "sell" | "buy"
  date: Date
}

export const ActionItem = ({type, date}: ActionItemProps) => (
  <div className={styles.orderActionsContainer}>
    <div className={`${styles.orderActionsIcon}${type === "sell" ? " " + styles.sell : ""}`}>
      {type === "buy" && <p>B</p>}
      {type === "sell" && <p>S</p>}
    </div>
    <p className="small">{date.toLocaleString('en-GB', {hour: "numeric", minute: "numeric", hour12: true})}</p> 
  </div>
)