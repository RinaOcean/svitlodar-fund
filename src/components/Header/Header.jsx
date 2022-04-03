import Container from '../Container'
import styles from './Header.module.css'


const Header = () => {
  return (
    <Container>
    <div className={styles.header}>
      <div className={styles.svitloDarLogo}>
        <div>
         <span className={styles.svitlo}>svitlo</span>
         <span className={styles.dar}>dar</span>
        </div>
        {/* <span className={styles.charityFund}>charity fund</span> */}
      </div>

      <nav className={styles.headerNav}>
        <span className={styles.headerNavItem}>about us</span>
        <span className={styles.headerNavItem}>what we do</span>
        <span className={styles.headerNavItem}>contacts</span>
      </nav>

    </div>
    </Container>
  )
}

export default Header