import Container from '../Container'
import styles from './HowToDonate.module.css'

import { useTranslation } from 'react-i18next';

const HowToDonate = () => {
  const { t } = useTranslation();

  return (
    <section id="HowToDonate" className={styles.HowToDonate}>
      <Container>
        <div className={styles.donateWrapper}>
          <div className={styles.contactsWrapper}>
            <h2 className={styles.headding}>{t('contacts')}</h2>
            <div className={styles.contacts}>            
              <a className={styles.social} href="tel:+380964544769">+380 96 454 47 69</a><span> ({t('Tatyana')})</span><br/>
              <a className={styles.social} href="viber://chat?number=+380964544769">Viber</a><br/>
              <a className={styles.social} href="email:svitlodar_donate@gmail.com">svitlodar_donate@gmail.com</a>
            </div>
          </div> 

          <div>
            <h2 className={styles.headding}>{t('requisites')}</h2>
            <div className={styles.requisites}>          
              <p>
                <span>{t('BO BLAGODIYNYY FOND SVITLODAR BLAGODIYNA ORGANIZACIYA(Charity Organization)')}</span><br/>
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
          </div>           
                   
        </div>  
                        
      </Container>
    </section>
    
  )
}

export default HowToDonate