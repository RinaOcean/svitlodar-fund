import Container from '../Container'
import styles from './Header.module.css'
import menuSvg from '../../assets/menu.svg';
import { NavLink } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';


const Header = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
 
  const handleOnChange=(e)=>{
    setLanguage(e.target.value);
    i18next.changeLanguage(e.target.value);
  }
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if(show) {
    document.body.style.position = 'fixed';
  }else{
    document.body.style.position = '';
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

      <Form.Select aria-label="Default select example" className={styles.langSelect} onChange={e => handleOnChange(e)} size="sm">
       
       <option value="en">en</option>
       <option value="ru">рус</option>
       <option value="uk">укр</option>
  
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
            onClick={handleClose}
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})}
            to='/'>{t("main")}
          </NavLink>
   

          {/* <NavLink 
            className={styles.headerNavItem} 
            onClick={handleClose}
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})}
            to='/'>{t("about us")}
            
          </NavLink> */}

          <NavLink 
            className={styles.headerNavItem} 
            onClick={handleClose}
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})}
            to='/whatwedo'>{t("what we do")}
          </NavLink>

          <NavLink 
            className={styles.headerNavItem} 
            onClick={handleClose}
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})}
            to='/contacts'>{t("contacts")}
          </NavLink>

          <NavLink 
            className={styles.headerNavItem} 
            onClick={handleClose}
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})}
            to='/donate'>{t("donate")}
          </NavLink>

          <NavLink 
            className={styles.headerNavItem} 
            onClick={handleClose}
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})}
            to='/help'>{t("get help")}
          </NavLink> 

          <NavLink 
            className={styles.headerNavItem} 
            onClick={handleClose}
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})}
            to='/certificates'>{t("certificates")}
          </NavLink>

                                 
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
      
    </div>
    </Container>
    </section>
   
  )
}

export default Header