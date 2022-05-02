import Container from "../Container";
import styles from "./Help.module.css";
import { useTranslation } from 'react-i18next';

import Modal from 'react-bootstrap/Modal'
import mail from '../../assets/mail_icon.svg';
import tel from '../../assets/tel_icon.svg';
import viber from '../../assets/viber_icon.svg';
import { useState } from "react";

const Help = () => {
  const { t } = useTranslation();
  
  const [lgShow, setLgShow] = useState(false);

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
            <a className={styles.social} href="mailto:svitlodar.help@gmail.com">svitlodar.help@gmail.com</a>
          </div>
          
          <button className={styles.applicationButton} onClick={() => setLgShow(true)}>{t('apply for help')}</button>
          
                   
        </div>
        <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        backdrop="static"
        keyboard={false}
        animation={true}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <iframe 
          className={styles.form}
          id="inlineFrameExample"
          title="Inline Frame Example"
          src="https://docs.google.com/forms/d/e/1FAIpQLSe9--9xMMTgFuTKyErmiKFUu5PV9L-xcjuqCigL9XUdvQ2m3A/viewform?pli=1">
        </iframe>
        </Modal.Body>
      </Modal>
        
      </Container>
    </section>
  );
};

export default Help;