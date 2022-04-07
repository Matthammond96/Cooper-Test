import styles from '../../Orders.module.sass'

export const DateItem = ({date}: {date: Date}) => {
  const month = date.toDateString().slice(4, 7)
  const day = date.toDateString().slice(8, 10)

  return (
    <div className={styles.ordersDateItem}>
      <div>
        <p className='small'>{month}</p>
        <p className=''>{day}</p>
      </div>
    </div>
  )
}