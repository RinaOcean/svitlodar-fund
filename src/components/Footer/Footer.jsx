import Container from "../Container";
import styles from "./Footer.module.css";
import fb from '../../assets/fb_icon.svg';

const Footer = () => {
  return (
   
      <div className={styles.footer}> 
      <Container>
        <div className={styles.svitloDarLogo}>
          <div>
            <span className={styles.svitlo}>svitlo</span>
            <span className={styles.dar}>dar</span>
          </div>
        </div>
        <a className={styles.fbLink} href="https://www.facebook.com/BFSvetodar/"> <img className={styles.socialIcon} src={fb} width="30" height="30" alt="email"/></a>
       </Container> 
      </div>
    
  );
};

export default Footer;