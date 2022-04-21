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
          <span>Наталья</span> <br/>
          <a href="tel:+38 050 583 06 40">+38 050 583 06 40</a> <br/>
          <a href="viber://chat?number=+380505830640">Написать в Вайбер</a><br/>
          <a href="whatsapp://send?phone=+380505830640">WhatsApp</a><br/>
          <a href="tg://resolve?domain=+380505830640">Telegram</a>
          {/* <a href="telegram://chat?number=+380505830640">Написать в Telegram</a> */}
          {/* <a href="email:svitlodar2015@gmail.com">svitlodar2015@gmail.com</a> */}
        </div>
      </Container>
    </section>
  );
};

export default Help;