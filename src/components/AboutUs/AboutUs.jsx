import Container from '../Container'
import styles from './AboutUs.module.css'
import yellowEclps from '../../assets/yellowEllipse.svg'
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className={styles.aboutUs}>
      <Container>
        <h1 className={styles.headding}>{t('about us')}</h1>
        <div className={styles.imgWrapper}>
          <p className={styles.description}>
          {t('Charity Fund Svitlodar was founded on October 01, 2015. We started as volunteers helping the victims of the anti-terrorist operation (ATO) in the East of Ukraine in 2014-2015.')}
          </p>
          <img className={styles.eclipseOneImg} src={yellowEclps} alt='yellow-blue heart'/>
        </div>
      </Container>
    </section>
    
  )
}

export default AboutUs