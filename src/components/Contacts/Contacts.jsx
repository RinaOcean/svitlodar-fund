import Container from "../Container";
import styles from "./Contacts.module.css";

const Contacts = () => {
  return (
    <section id="contacts" className={styles.aboutUs}>
      <Container>
        <h1 className={styles.headding}>contacts</h1>
      </Container>
    </section>
  );
};

export default Contacts;