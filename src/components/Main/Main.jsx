import styles from './Main.module.css'
import ybHeart from '../../assets/yellowBlueHeart.svg'
import Container from '../Container'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const Main = () => {
  const { t } = useTranslation();
  
  let navigate = useNavigate()
  function onClickDonateHandler() {
   navigate("/donate")
  }
  
  function onClickHelpHandler() {
   navigate("/help")
  }

  return (
    <Container>
      <section className={styles.main}>
        <div className={styles.wrapper}>
          <h1 className={styles.mainHeader}>{t('Charity fund Svitlodar')}</h1>
        <img className={styles.heartImg} src={ybHeart} alt='yellow-blue heart'/>
        </div>
        <div className={styles.btnWrapper}>
          <button type="button" className={styles.wantHelpButton} onClick={onClickDonateHandler}>{t('Donate')}</button>
          <button type="button" className={styles.needHelpButton} onClick={onClickHelpHandler}>{t('I need help')}</button>
        </div>
        
      </section>
    </Container>
  )
}

export default Main