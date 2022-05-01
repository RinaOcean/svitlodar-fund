import Container from '../Container'
import styles from './HowToDonate.module.css'
import mail from '../../assets/mail_icon.svg';
import tel from '../../assets/tel_icon.svg';
import viber from '../../assets/viber_icon.svg';
import { useTranslation } from 'react-i18next';

const HowToDonate = () => {
  const { t } = useTranslation();

  return (
    <section id="HowToDonate" className={styles.HowToDonate}>
      <Container>
        <div className={styles.donateWrapper}>
          <div className={styles.contactsWrapper}>
            
            <h2 className={styles.headding}>{t('contact with us')}</h2>
            <div className={styles.socialWrapper}>
              <img className={styles.socialIcon} src={tel} width="30" height="30" alt="telephone"/>             
              <a className={styles.social} href="tel:+380964544769">+380 96 454 47 69</a><span> ({t('Tatyana')})</span><br/>
            </div>
              
            <div className={styles.socialWrapper}>
              <img className={styles.socialIcon} src={viber} width="30" height="30" alt="telephone"/>
              <span>Viber: </span>
              <a className={styles.social} href="viber://chat?number=380964544769"> +380 96 454 47 69</a><br/>
            </div>

            <div className={styles.socialWrapper}>
              <img className={styles.socialIcon} src={mail} width="30" height="30" alt="telephone"/>
              <a className={styles.social} href="email:svitlodar_donate@gmail.com">svitlodar_donate@gmail.com</a>
            </div>
                          
          </div> 

          
          <div className={styles.requisites}>          
            <h2 className={styles.headding}>{t('bank account details')}</h2>
            <div>
              <span>{t('BO BLAGODIYNYY FOND SVITLODAR')}</span><br/>
              <span>{t('BLAGODIYNA ORGANIZACIYA(Charity Organization)')}</span><br/>
              <span>{t('CB "PRIVATBANK"')}</span><br/>
              <span>{t('USREOU code 40044111')}</span><br/>
            </div>

            <div>
              <span>IBAN: UA303515330000026002015901304</span><br/>
              <span>USD</span>
            </div>

            <div>
              <span>IBAN: UA483515330000026007025900152</span><br/>
              <span>EUR</span>
            </div>

            <div>
              <span>IBAN: UA433515330000020630052328932</span><br/>
              <span>UAH</span>
            </div>
          </div>
                    
                   
        </div>  
                        
      </Container>
    </section>
    
  )
}

export default HowToDonate