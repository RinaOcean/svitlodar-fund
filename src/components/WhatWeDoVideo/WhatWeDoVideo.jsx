import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import Lightroom from 'react-lightbox-gallery';
import styles from "./WhatWeDoVideo.module.css";
import Container from "../Container";

import video1_en from "../../assets/video/Our Help_20220517_EN.mp4";
import video2_en from "../../assets/video/Saving_lives_20220523_EN.mp4";
import video3_en from "../../assets/video/Gratitude_2022_05_28_EN_2.mp4";
import video4_en from "../../assets/video/Gifts_20220514_EN.mp4";

import video1_ru from "../../assets/video/Svitlodar_RU.mp4";
import video2_ru from "../../assets/video/Saving_lives_20220523_RU.mp4";
import video3_ru from "../../assets/video/Gratitude_2022_05_28_RU.mp4";

import video1_ua from "../../assets/video/Svitlodar_UA.mp4";
import video2_ua from "../../assets/video/Saving_lives_20220523_UA.mp4";

const WhatWeDoVideo = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <section id='whatwedo' className={styles.gallery}>
 
        <div className={styles.videoWrapper} name="video_eng">
          <video className={styles.video} controls>
           <source src={video1_en} type="video/mp4" />        
          </video>  

          <video className={styles.video} controls>
           <source src={video2_en} type="video/mp4" />        
          </video> 
        </div>
        <div className={styles.videoWrapper} name="video_eng">
          <video className={styles.video} controls>
           <source src={video3_en} type="video/mp4" />        
          </video> 
          
          <video className={styles.video} controls>
           <source src={video4_en} type="video/mp4" />        
          </video> 
        </div> 

        <div className={styles.videoWrapper} name="video_ru">
          <video className={styles.video} controls>
           <source src={video1_ru} type="video/mp4" />        
          </video>  

          <video className={styles.video} controls>
           <source src={video2_ru} type="video/mp4" />        
          </video> 
        </div>
        <div className={styles.videoWrapper} name="video_ru">
          <video className={styles.video} controls>
           <source src={video3_ru} type="video/mp4" />        
          </video> 
        </div> 

        <div className={styles.videoWrapper} name="video_ua">
          <video className={styles.video} controls>
           <source src={video1_ua} type="video/mp4" />        
          </video>  

          <video className={styles.video} controls>
           <source src={video2_ua} type="video/mp4" />        
          </video> 
        </div>

        <Helmet>
          <script>
          {`
              var lng='en';
              var i = 0;
              if (document.getElementById("setLng") != null)
                lng = document.getElementById("setLng").value;

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
          `}    
          </script>
        </Helmet>

      </section>
    </Container>
  );
};



export default WhatWeDoVideo;