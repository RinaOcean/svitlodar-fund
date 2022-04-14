import Container from '../Container'
import styles from './HowToDonate.module.css'

import { useTranslation } from 'react-i18next';

const HowToDonate = () => {
  const { t } = useTranslation();

  return (
    <section id="HowToDonate" className={styles.HowToDonate}>
      <Container>
        <h1 className={styles.headding}>{t('How to Donate')}</h1>
        
        <p className={styles.description}>
          <span>{t('Ukraine, 61093, Kharkiv, str.Skorokhoda, 4')}</span><br/>
          <span>+380968785248,</span><br/>
          <span>{t('USREOU code 40044111')}</span><br/>
          <span>{t('CB "PRIVATBANK')}</span><br/>
          <span>{t('USREOU bank code 14360570,')}</span><br/>
          <span>{t('bank code 351533')}</span><br/>
          <span>№ UA433515330000020630052328932, UAH</span>
         </p>
        
      </Container>
    </section>
    
  )
}

export default HowToDonate