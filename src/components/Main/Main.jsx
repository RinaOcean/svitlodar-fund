import styles from './Main.module.css'
import ybHeart from '../../assets/yellowBlueHeart.svg'
import Container from '../Container'
import { useTranslation } from 'react-i18next';

const Main = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <section className={styles.main}>
        <h1 className={styles.mainHeader}>{t('Charity fund Svitlodar')}</h1>
        <img className={styles.heartImg} src={ybHeart} alt='yellow-blue heart'/>
      </section>
    </Container>
  )
}

export default Main