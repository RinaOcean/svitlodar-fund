import Container from "../Container";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <Container>
      <div className={styles.header}>
        <div className={styles.svitloDarLogo}>
          <div>
            <span className={styles.svitlo}>svitlo</span>
            <span className={styles.dar}>dar</span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Footer;