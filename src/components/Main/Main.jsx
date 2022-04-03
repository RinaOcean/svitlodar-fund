import styles from './Main.module.css'
import ybHeart from '../../assets/yellowBlueHeart.svg'
import Container from '../Container'

const Main = () => {
  return (
    <Container>
      <section className={styles.main}>
        <h1 className={styles.mainHeader}>Charity Fund Svitlodar</h1>
        <img className={styles.heartImg} src={ybHeart} alt='yellow-blue heart'/>
      </section>
    </Container>
  )
}

export default Main