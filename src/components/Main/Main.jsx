import styles from './Main.module.css'
import ybHeart from '../../assets/yellowBlueHeart.svg'

const Main = () => {
  return (
    <div className={styles.main}>
     <h1 className={styles.mainHeader}>Charity Fund Svitlodar</h1>
     <img src={ybHeart} alt='yellow-blue heart'/>
    </div>
  )
}

export default Main