import Container from '../Container'
import styles from './WhyItsImportant.module.css'

import { useTranslation } from 'react-i18next';

const WhyItsImportant = () => {
  const { t } = useTranslation();

  return (
    <section id="whyItsImportant" className={styles.WhyItsImportant}>
      <Container>
        <h1 className={styles.headding}>{t('why it is important')}</h1>
        
        <p className={styles.description}>
        {t('More than 10 million Ukrainians have left their homes due to the Russian invasion, and this figure is growing every day. Approximately 6.5 million of them are internally displaced persons, and about 13.5% are forced to flee a second time (for the first time due to hostilities in the Donbas in 2013-2014). Today, the war has touched every Ukrainian and everyone has post-traumatic stress disorders in one way or another, and many of them need serious rehabilitation.')}
        </p>
        
      </Container>
    </section>
    
  )
}

export default WhyItsImportant