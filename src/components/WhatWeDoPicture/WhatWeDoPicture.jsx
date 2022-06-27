import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

import Lightroom from 'react-lightbox-gallery';
import styles from "./WhatWeDoPicture.module.css";
import Container from "../Container";

import lviv1 from '../../assets/photo/IMG-6e151fad31dcd48da4c62d80497bd72f-V.jpg';
import lviv2 from '../../assets/photo/IMG-92a40b6511c0a1f7ae9a33c5fab64e38-V.jpg';  
import lviv3 from '../../assets/photo/IMG-c954be58483f95e73ea70d00f9b7f61a-V.jpg';

import firstAidKit1 from '../../assets/photo/IMG-029e26c49c696c2649d3b4ea77d1f05c-V.jpg';
import firstAidKit2 from '../../assets/photo/IMG-1321dcfd40cdf74b3ee5bcdcd06db4a3-V.jpg';
import firstAidKit3 from '../../assets/photo/IMG-1e282d8e48f694ed006e9c680da6fee6-V.jpg';
import firstAidKit4 from '../../assets/photo/IMG-69ded6debccc32c4ed0b28da6fbcc09b-V.jpg';
import firstAidKit5 from '../../assets/photo/IMG-de993308f375ca215f73503c95b14a18-V.jpg';

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

const WhatWeDoPicture = () => {
  const { t } = useTranslation();
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
 
  const imagesLviv = [
    {
      src:lviv1,
      desc: 'Svitlodar Fund documents',
      sub: 'Lviv'
    },
    {
      src:lviv2,
      desc: 'Svitlodar Fund documents',
      sub: 'Lviv'
    },
    {
      src:lviv3,
      desc: 'Svitlodar Fund documents',
      sub: 'Lviv'
    }
  ]

  const imagesFirstAidKit = [
    {
      src:firstAidKit1,
      desc: 'Svitlodar Fund documents',
      sub: 'Lviv'
    },
    {
      src:firstAidKit2,
      desc: 'Svitlodar Fund documents',
      sub: 'Lviv'
    },
    {
      src:firstAidKit3,
      desc: 'Svitlodar Fund documents',
      sub: 'Lviv'
    },
    {
      src:firstAidKit4,
      desc: 'Svitlodar Fund documents',
      sub: 'Lviv'
    },
    {
      src:firstAidKit5,
      desc: 'Svitlodar Fund documents',
      sub: 'Lviv'
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

  const settingsLviv = {
    columnCount:{
      default:3,
      mobile:3,
      tab:3
    },
    mode: 'dark'
  }

  const settingsFirstAidKit = {
    columnCount:{
      default:5,
      mobile:3,
      tab:5
    },
    mode: 'dark'
  }

  return (
    <Container>
      <section id='whatwedo' className={styles.gallery}>

        <p className={styles.description}>
           <b>{t('whatWeDoLvivLine1')}</b> <br/>{t('whatWeDoLvivLine2')}<br/>{t('whatWeDoLvivLine3')}{t('whatWeDoLvivLine3a')}<b>{t('whatWeDoLvivLine4')}</b>
        </p>
        <Lightroom images={imagesLviv} settings={settingsLviv} />
        <br/>
        <p className={styles.description}>
          <b>{t('whatWeDoFirstAidKidLine1')}</b> <br/>{t('whatWeDoFirstAidKidLine2')}<br/>{t('whatWeDoFirstAidKidLine3')}<br/>{t('whatWeDoFirstAidKidLine4')}
        </p>
        <Lightroom images={imagesFirstAidKit} settings={settingsFirstAidKit} />
        <br/>
        <Lightroom images={images} settings={settings} />

      </section>
    </Container>
  );
};



export default WhatWeDoPicture;