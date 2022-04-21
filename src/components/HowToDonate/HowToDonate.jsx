import Container from '../Container'
import styles from './HowToDonate.module.css'

import { useTranslation } from 'react-i18next';

const HowToDonate = () => {
  const { t } = useTranslation();

  return (
    <section id="HowToDonate" className={styles.HowToDonate}>
      <Container>
        <h1 className={styles.headding}>{t('How to Donate')}</h1>
        
        <div className={styles.description}>
          <p>
            <span>{t('Ukraine, 61093, Kharkiv, str.Skorokhoda, 4')}</span><br/>
            <span>+380968785248</span><br/>
          </p>
          <p>
            <span>{t('BO BLAGODIYNYY FOND SVITLODAR BLAGODIYNA ORGANIZACIYA(Charity Organization')}</span><br/>
            <span>{t('CB "PRIVATBANK"')}</span><br/>
            <span>{t('USREOU code 40044111')}</span><br/>
          </p>
          
          <p>
          <span>IBAN: UA303515330000026002015901304</span><br/>
          <span>USD</span>
          </p>
          <p>
          <span>IBAN: UA483515330000026007025900152</span><br/>
          <span>EUR</span>
          </p>
          <p>
          <span>IBAN: UA433515330000020630052328932</span><br/>
          <span>UAH</span>
          </p>
        </div>
        
      </Container>
    </section>
    
  )
}

export default HowToDonate