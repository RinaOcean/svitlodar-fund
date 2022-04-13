import Container from '../Container'
import styles from './AboutUs.module.css'
import yellowEclps from '../../assets/yellowEllipse.svg'
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';

const AboutUs = () => {
  const { t } = useTranslation();

  let navigate = useNavigate()
  function onClickHandler() {
   navigate("/aboutus")
  }

  return (
    <section id="about" className={styles.aboutUs}>
      <Container>
        <h1 className={styles.headding}>{t('about us')}</h1>
        <div className={styles.imgWrapper}>
          <p className={styles.description}>
          {t('Charity Fund Svitlodar was founded on October 1, 2015. We started as volunteers helping the victims of the anti-terrorist operation (ATO) in the East of Ukraine in 2014.')}
          </p>
          <img className={styles.eclipseOneImg} src={yellowEclps} alt='yellow-blue heart'/>
        </div>
        <button type="button" className={styles.detailButton} onClick={onClickHandler}>{t('Details')}</button>
      </Container>
    </section>
    
  )
}

export default AboutUs