import { Currency } from "../../../../store/slices/currencies/currenciesModel"
import { CDN } from "../../../../utils/commons"
import styles from '../../Orders.module.sass'

export const CoinLineItem = ({currency}: {currency: Currency}) => (
  <div className={styles.CurrenyContainer}>
    <img src={CDN(currency.currency)} alt={currency.name} width="24" height="24" />
    
    <div>
      <p>{currency.name}</p>
      <p className="small">{currency.currency}</p>
    </div>
  </div>
)