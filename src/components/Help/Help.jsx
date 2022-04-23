import Container from "../Container";
import styles from "./Help.module.css";
import { useTranslation } from 'react-i18next';

const Help = () => {
  const { t } = useTranslation();
  
  return (
    <section id="help" className={styles.help}>
      <Container>
        <div  className={styles.contactsWrapper}>
          <h2 className={styles.headding}>{t('contacts')}</h2>
          
          <a href="tel:+38 050 583 06 40">+38 050 583 06 40</a><span> ({t('Natalya')})</span> <br/> 
          <a className={styles.social} href="viber://chat?number=+380505830640">Viber</a>
          <a className={styles.social} href="email:svitlodar.help@gmail.com">svitlodar.help@gmail.com</a>
          <a className={styles.applicationButton} href="https://docs.google.com/forms/d/e/1FAIpQLSe9--9xMMTgFuTKyErmiKFUu5PV9L-xcjuqCigL9XUdvQ2m3A/viewform">{t('apply for help')}</a>
                   
        </div>
      </Container>
    </section>
  );
};

export default Help;