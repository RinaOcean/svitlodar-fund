import Container from '../Container'
import styles from './UnderConstruction.module.css'
import ybHeart from '../../assets/yellowBlueHeart.svg'
import { useTranslation } from 'react-i18next';

const UnderConstruction = () => {
  const { t } = useTranslation();

  return (
    <section id="underConstruction" className={styles.underConstruction}>
      <Container>
      <section className={styles.main}>
        <h3 className={styles.header}>{t('Sorry, we are doing some work on this page')}</h3>
        <h1 className={styles.mainHeader}>{t('this page is under construction')}</h1>
        <img className={styles.heartImg} src={ybHeart} alt='yellow-blue heart'/>
      </section>
      </Container>
    </section>
    
  )
}

export default UnderConstruction