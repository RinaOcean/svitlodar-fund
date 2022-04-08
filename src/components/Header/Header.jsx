import Container from '../Container'
import styles from './Header.module.css'
import menuSvg from '../../assets/menu.svg';
import { NavLink } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link, animateScroll as scroll } from "react-scroll"
import { useState } from 'react';

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if(show) {
    document.body.style.position = 'fixed';
  }else{
    document.body.style.position = '';
  }
  
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Container>
    <div className={styles.header}>
      <div className={styles.svitloDarLogo}>
        <div>
         <span className={styles.svitlo}>svitlo</span>
         <span className={styles.dar}>dar</span>
        </div>
      </div>

      <button type="button" className={styles.button} onClick={handleShow}>
        <img className={styles.menu} src={menuSvg} width="30" height="30" alt="menu"/>
      </button>
      
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className={styles.headerNav}>
            
          <Link className={styles.headerNavItem}  activeClass={styles.headerNavItem}
          to="about"
          spy={true}
          smooth={true}
          offset={60}
          duration={500}>about us
        </Link>

        <Link className={styles.headerNavItem}  activeClass={styles.headerNavItem}
          to="whatwedo"
          spy={true}
          smooth={true}
          offset={60}
          duration={500}>what we do
        </Link>

        <Link className={styles.headerNavItem}  activeClass={styles.headerNavItem}
          to="contacts"
          spy={true}
          smooth={true}
          offset={60}
          duration={500}>contacts
        </Link>
          {/* <NavLink 
            onClick={scrollToTop} className={styles.item} 
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})}
            to='/who-we-are'>Хто ми?
          </NavLink>    */}
                  
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
      {/* <nav className={styles.headerNav}>
        <Link className={styles.headerNavItem}  activeClass={styles.headerNavItem}
          to="about"
          spy={true}
          smooth={true}
          offset={60}
          duration={500}>about us
        </Link>
        
        <Link className={styles.headerNavItem}  activeClass={styles.headerNavItem}
          to="whatwedo"
          spy={true}
          smooth={true}
          offset={60}
          duration={500}>what we do
        </Link>

        <Link className={styles.headerNavItem}  activeClass={styles.headerNavItem}
          to="contacts"
          spy={true}
          smooth={true}
          offset={60}
          duration={500}>contacts
        </Link>
     
      </nav> */}

    </div>
    </Container>
  )
}

export default Header