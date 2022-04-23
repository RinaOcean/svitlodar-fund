import Container from "../Container";
import styles from "./Contacts.module.css";
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <section id="contacts" className={styles.contacts}>
      <Container>

        <h2 className={styles.headding}>{t('contacts to help')}</h2>
        
        <div  className={styles.contactsWrapper}>
          <span>{t('Tatiana')}</span><br/>
          <a className={styles.social} href="tel:+380 57 777 3976">+380 96 454 47 69</a> 
          <a className={styles.social} href="viber://chat?number=+380964544769">Viber</a>
          {/* <a className={styles.social} href="email:svitlodar2015@gmail.com">svitlodar_donate@gmail.com</a> */}
          
          {/* <a href="https://www.facebook.com/BFSvetodar/">Facebook</a> */}
        </div>
        <h2 className={styles.headding}>{t('contacts to get help')}</h2>
        <div  className={styles.contactsWrapper}>
          <span>{t('Natalya')}</span><br/>
          <a href="tel:+38 050 583 06 40">+38 050 583 06 40</a> <br/>
          <a className={styles.social} href="viber://chat?number=+380505830640">Viber</a>
          {/* <a className={styles.social} href="whatsapp://send?phone=+380505830640">WhatsApp</a> */}
          
          {/* <a className={styles.social} href="https://www.facebook.com/BFSvetodar/">Facebook</a> */}
        </div>
        
      </Container>
    </section>
  );
};

export default Contacts;