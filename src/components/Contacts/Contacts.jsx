import Container from "../Container";
import styles from "./Contacts.module.css";
import { useTranslation } from 'react-i18next';

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <section id="contacts" className={styles.contacts}>
      <Container>
        <h1 className={styles.headding}>{t('contacts')}</h1>
        <div  className={styles.contactsWrapper}>
          <a href="tel:+380 57 777 3976">+380 57 777 3976</a> <br/>
          <a href="email:svitlodar2015@gmail.com">svitlodar2015@gmail.com</a>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;