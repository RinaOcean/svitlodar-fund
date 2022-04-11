import Container from '../Container'
import styles from './Header.module.css'
import menuSvg from '../../assets/menu.svg';
import { NavLink } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link, animateScroll as scroll } from "react-scroll"
import { useState } from 'react';
import Form from 'react-bootstrap/Form'

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
    <section className={styles.headerWrapper}>
       <Container>
    <div className={styles.header}>
      <NavLink 
        className={styles.headerNavItem} 
        style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})}
         to='/'> 
        <div>
         <span className={styles.svitlo}>svitlo</span>
         <span className={styles.dar}>dar</span>
        </div>
          </NavLink>
      <div className={styles.svitloDarLogo}>
       
      </div>

      <Form.Select aria-label="Default select example" className={styles.langSelect} size="sm">
       
       <option value="1">en</option>
       <option value="2">рус</option>
       <option value="2">укр</option>
  
      </Form.Select>

      <button type="button" className={styles.button} onClick={handleShow}>
        <img className={styles.menu} src={menuSvg} width="30" height="30" alt="menu"/>
      </button>
      
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className={styles.headerNav}>
          <NavLink 
            className={styles.headerNavItem} 
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})}
            to='/aboutus'>about us
          </NavLink>

          <NavLink 
            className={styles.headerNavItem} 
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})}
            to='/whatwedo'>what we do
          </NavLink>

          <NavLink 
            className={styles.headerNavItem} 
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})}
            to='/contacts'>contacts
          </NavLink>

          {/* <Link className={styles.headerNavItem}  activeClass={styles.headerNavItem}
          to="about"
          spy={true}
          smooth={true}
          offset={60}
          duration={500}>about us
        </Link> */}

        {/* <Link className={styles.headerNavItem}  activeClass={styles.headerNavItem}
          to="whatwedo"
          spy={true}
          smooth={true}
          offset={60}
          duration={500}>what we do
        </Link> */}

        {/* <Link className={styles.headerNavItem}  activeClass={styles.headerNavItem}
          to="contacts"
          spy={true}
          smooth={true}
          offset={60}
          duration={500}>contacts
        </Link> */}
                          
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
      
    </div>
    </Container>
    </section>
   
  )
}

export default Header