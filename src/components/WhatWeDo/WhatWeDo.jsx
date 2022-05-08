import Lightroom from 'react-lightbox-gallery';
import styles from "./WhatWeDo.module.css";
import Container from "../Container";

import img1 from '../../assets/photo/humanitarian_help_01.jpg';
import img2 from '../../assets/photo/humanitarian_help_02.jpg';
import img3 from '../../assets/photo/humanitarian_help_03.jpg';
import img4 from '../../assets/photo/humanitarian_help_04.jpg';
import img5 from '../../assets/photo/humanitarian_help_05.jpg';
import img6 from '../../assets/photo/humanitarian_help_06.jpg';
import img7 from '../../assets/photo/humanitarian_help_07.jpg';
import img8 from '../../assets/photo/humanitarian_help_08.jpg';
import img9 from '../../assets/photo/humanitarian_help_09.jpg';
import img10 from '../../assets/photo/humanitarian_help_10.jpg';
import img11 from '../../assets/photo/humanitarian_help_11.jpg';
import img12 from '../../assets/photo/kids.jpg';
import img13 from '../../assets/photo/kids_03.jpg';
import img14 from '../../assets/photo//kids_help.jpg';
import img15 from '../../assets/photo/kids_kharkiv_monument.jpg';
import img16 from '../../assets/photo/kids_park.jpg';
import img17 from '../../assets/photo/hugs.jpg';
import img18 from '../../assets/photo/kids_with_horses.jpg';
import img19 from '../../assets/photo/kids_with_horses_02.jpg';
import img20 from '../../assets/photo/kids_with_plane.jpg';
import img21 from '../../assets/photo/little_kids.jpg';
import img22 from '../../assets/photo/little_kids_02.jpg';
import img23 from '../../assets/photo/ukrainian_girls.jpg';



const WhatWeDo = () => {

  const images = [
    {
      src:img1,
      desc: 'Svitlodar Fund documents',
      sub: 'Gift Habeshaw'
    },
    {
      src: img2,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    },
    {
      src: img3,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    },
    {
      src: img4,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    },
    {
      src: img5,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    },
    {
      src:img6,
      desc: 'Svitlodar Fund documents',
      sub: 'Gift Habeshaw'
    },
    {
      src: img7,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    },
    {
      src: img8,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    },
    {
      src: img9,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    },
    {
      src: img10,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    },
    {
      src:img11,
      desc: 'Svitlodar Fund documents',
      sub: 'Gift Habeshaw'
    },
    {
      src: img12,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    },
    {
      src: img13,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    },
    {
      src: img14,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    },
    {
      src: img15,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    },
    {
      src:img16,
      desc: 'Svitlodar Fund documents',
      sub: 'Gift Habeshaw'
    },
    {
      src: img17,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    },
    {
      src: img18,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    },
    {
      src: img19,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    },
    {
      src: img20,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    }
    ,
    {
      src: img21,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    },
    {
      src: img22,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    },
    {
      src: img23,
      desc: 'Svitlodar Fund documents',
      sub: 'Dmitriy Frantsev'
    }
  ]
  const settings = {
    columnCount:{
      default:4,
      mobile:3,
      tab:4
    },
    mode: 'dark'
  }

  return (
    <Container>
      <section id='whatwedo' className={styles.gallery}>
        {/* <div className={styles.galleryItem}>
          <img src={img1} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img2} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img3} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img4} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img5} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img6} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img7} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img8} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img9} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img10} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img11} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img12} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img13} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img14} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img15} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img16} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img17} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img18} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img19} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img20} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img21} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img22} alt='humanitarian help'/>
        </div>
        <div className={styles.galleryItem}>
          <img src={img23} alt='humanitarian help'/>
        </div> */}

      <Lightroom images={images} settings={settings} />


      </section>
    </Container>
  );
};

export default WhatWeDo;