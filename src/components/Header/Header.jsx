import Container from '../Container'
import styles from './Header.module.css'
import { NavLink } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll"

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
        <Link className={styles.headerNavItem}  activeClass={styles.headerNavItem}
          to="about"
          spy={true}
          smooth={true}
          offset={60}
          duration={500}>about us
        </Link>
        
        <NavLink className={styles.headerNavItem} to="/">what we do</NavLink>
        <NavLink className={styles.headerNavItem} to="/">contacts</NavLink>
      </nav>

    </div>
    </Container>
  )
}

export default Header