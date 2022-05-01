import Container from "../Container";
import styles from "./Help.module.css";
import { useTranslation } from 'react-i18next';

import mail from '../../assets/mail_icon.svg';
import tel from '../../assets/tel_icon.svg';
import viber from '../../assets/viber_icon.svg';

const Help = () => {
  const { t } = useTranslation();
  
  return (
    <section id="help" className={styles.help}>
      <Container>
        <div  className={styles.contactsWrapper}>
          <h2 className={styles.headding}>{t('contact with us')}</h2>
          
          <div className={styles.socialWrapper}>
            <img className={styles.socialIcon} src={tel} width="30" height="30" alt="telephone"/>
            <a href="tel:+38 050 583 06 40">+38 050 583 06 40</a><span> ({t('Natalya')})</span> 
          </div>
          
          <div className={styles.socialWrapper}>
            <img className={styles.socialIcon} src={viber} width="30" height="30" alt="viber"/>
            <span>Viber: </span>
            <a className={styles.social} href="viber://chat?number=380505830640"> +38 050 583 06 40</a>
          </div>

            
          <div className={styles.socialWrapper}>
            <img className={styles.socialIcon} src={mail} width="30" height="30" alt="email"/>
            <a className={styles.social} href="email:svitlodar.help@gmail.com">svitlodar.help@gmail.com</a>
          </div>
          
          <a className={styles.applicationButton} href="https://docs.google.com/forms/d/e/1FAIpQLSe9--9xMMTgFuTKyErmiKFUu5PV9L-xcjuqCigL9XUdvQ2m3A/viewform">{t('apply for help')}</a>
                   
        </div>
      </Container>
    </section>
  );
};

export default Help;