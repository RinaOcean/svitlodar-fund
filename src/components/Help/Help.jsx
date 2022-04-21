import Container from "../Container";
import styles from "./Help.module.css";
import { useTranslation } from 'react-i18next';

const Help = () => {
  const { t } = useTranslation();

  return (
    <section id="help" className={styles.help}>
      <Container>
        {/* <h1 className={styles.headding}>{t('help')}</h1> */}
        <div  className={styles.contactsWrapper}>
          <a href="tel:+050 583 06 40">+050 583 06 40</a> <br/>
          <span>Наталья</span> <br/>
          {/* <a href="email:svitlodar2015@gmail.com">svitlodar2015@gmail.com</a> */}
        </div>
      </Container>
    </section>
  );
};

export default Help;