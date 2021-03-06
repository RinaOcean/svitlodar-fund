import React from 'react'
import Container from '../Container'
import styles from './Header.module.css'
import menuSvg from '../../assets/menu.svg';
import { NavLink } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';


function toggleVideo(){
  var lng='en'
  if (document.getElementById("setLng") != null)
    lng = document.getElementById("setLng").value;
  var path = window.location.pathname;
  var page = path.split("/").pop();
  if (page == "whatwedovideo"){
    var htmlElements_en = document.getElementsByName("video_eng");
    var htmlElements_ru = document.getElementsByName("video_ru");
    var htmlElements_ua = document.getElementsByName("video_ua");

    for(var i_en=0; i_en < htmlElements_en.length;i_en++){
      if (lng=="en") {
        htmlElements_en[i_en].style.display = "block";
      } else {
        htmlElements_en[i_en].style.display = "none";
      }
    }

    for(var i_ru=0; i_ru < htmlElements_ru.length;i_ru++){
      if (lng=="ru") {
        htmlElements_ru[i_ru].style.display = "block";
      } else {
        htmlElements_ru[i_ru].style.display = "none";
      }
    }

    for(var i_ua=0; i_ua < htmlElements_ua.length;i_ua++){
      if (lng=="uk") {
        htmlElements_ua[i_ua].style.display = "block";
      } else {
        htmlElements_ua[i_ua].style.display = "none";
      }
    }

  }
}

const Header = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState('en');
 
  const handleOnChange=(e)=>{
    setLanguage(e.target.value);
    i18next.changeLanguage(e.target.value);
    toggleVideo();  
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

      <Form.Select aria-label="Default select example" className={styles.langSelect} onChange={e => handleOnChange(e)} size="sm" id="setLng">
       
       <option value="en">en</option>
       <option value="ru">??????</option>
       <option value="uk">??????</option>
  
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

          <NavLink 
            className={styles.headerNavItem} 
            onClick={handleClose}
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})}
            to='/whatwedovideo'>{t("what we do in videos")}
          </NavLink>

          <NavLink 
            className={styles.headerNavItem} 
            onClick={handleClose}
            style={({isActive})=>({color: isActive ? "rgb(102, 45, 145)": '',pointerEvents: isActive ? "none" : ""})}
            to='/whatwedopicture'>{t("what we do in pictures")}
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
            to='/documents'>{t("documents")}
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