import Container from "../Container";
import styles from "./Contacts.module.css";
import { useTranslation } from 'react-i18next';
import mail from '../../assets/mail_icon.svg';
import tel from '../../assets/tel_icon.svg';
import viber from '../../assets/viber_icon.svg';
import fb from '../../assets/fb_icon.svg';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <section id="contacts" className={styles.contacts}>
      <Container>
        <div className={styles.wrapper}>
          <div  className={styles.contactsWrapper}>
            <h2 className={styles.headding}>{t('contacts to help fund')}</h2>
            <div className={styles.socialWrapper}>
              <img className={styles.socialIcon} src={tel} width="30" height="30" alt="telephone"/>
              <a href="tel:+38 050 583 06 40">+38 050 583 06 40</a><span> ({t('Natalya')})</span> <br/> 
            </div>
          
            <div className={styles.socialWrapper}>
              <img className={styles.socialIcon} src={viber} width="30" height="30" alt="viber"/>
              <a className={styles.social} href="viber://chat?number=+380505830640">Viber</a>
            </div>
            
            <div className={styles.socialWrapper}>
              <img className={styles.socialIcon} src={mail} width="30" height="30" alt="email"/>
              <a className={styles.social} href="email:svitlodar.help@gmail.com">svitlodar.help@gmail.com</a>
            </div>

            {/* <div className={styles.socialWrapper}>
              <img className={styles.socialIcon} src={fb} width="30" height="30" alt="email"/>
              <a className={styles.social} href="https://www.facebook.com/BFSvetodar/">Facebook</a>           
            </div>
           */}
            <a className={styles.applicationButton} href="https://docs.google.com/forms/d/e/1FAIpQLSe9--9xMMTgFuTKyErmiKFUu5PV9L-xcjuqCigL9XUdvQ2m3A/viewform">{t('apply for help')}</a>
          </div>

          <div className={styles.contactsWrapper}>            
            <h2 className={styles.headding}>{t('contacts to get help')}</h2>
            <div className={styles.socialWrapper}>
              <img className={styles.socialIcon} src={tel} width="30" height="30" alt="telephone"/>             
              <a className={styles.social} href="tel:+380964544769">+380 96 454 47 69</a><span> ({t('Tatyana')})</span><br/>
            </div>
              
            <div className={styles.socialWrapper}>
              <img className={styles.socialIcon} src={viber} width="30" height="30" alt="telephone"/>
              <a className={styles.social} href="viber://chat?number=+380964544769">Viber</a><br/>
            </div>

            <div className={styles.socialWrapper}>
              <img className={styles.socialIcon} src={mail} width="30" height="30" alt="telephone"/>
              <a className={styles.social} href="email:svitlodar_donate@gmail.com">svitlodar_donate@gmail.com</a>
            </div>       
{/* 
            <div className={styles.socialWrapper}>
              <img className={styles.socialIcon} src={fb} width="30" height="30" alt="email"/>
              <a className={styles.social} href="https://www.facebook.com/BFSvetodar/">Facebook</a>           
            </div>          */}

          </div> 

        </div>
      </Container>
    </section>
  );
};

export default Contacts;