import React from 'react';
import Container from '../Container';
import Lightroom from 'react-lightbox-gallery';

import img1 from '../../assets/certificates/18-06-23_vypiska_1.jpg'
import img2 from '../../assets/certificates/18-06-23_vypiska_2.jpg'
import img3 from '../../assets/certificates/18-06-23_vypiska_3.jpg'
import img4 from '../../assets/certificates/18-07-06_registration.jpg'
import img5 from '../../assets/certificates/18_12_19_registr_organisation.jpg'

import styles from './Certificates.module.css';

import { useTranslation } from 'react-i18next';

const Certificates = () => {
  const { t } = useTranslation();

  const images = [
    {
      src:img1,
      // desc: 'Svitlodar Fund documents',
      // sub: 'Gift Habeshaw'
    },
    {
      src: img2,
      // desc: 'Svitlodar Fund documents',
      // sub: 'Dmitriy Frantsev'
    },
    {
      src: img3,
      // desc: 'Svitlodar Fund documents',
      // sub: 'Dmitriy Frantsev'
    },
    {
      src: img4,
      // desc: 'Svitlodar Fund documents',
      // sub: 'Dmitriy Frantsev'
    },
    {
      src: img5,
      // desc: 'Svitlodar Fund documents',
      // sub: 'Dmitriy Frantsev'
    }
  ]
  const settings = {
    columnCount:{
      default:3,
      mobile:2,
      tab:2
    },
    mode: 'dark'
  }

  return (
    <section id="certificates" className={styles.Certificates}>
      <Container>
      <div>
        <Lightroom images={images} settings={settings} />
      </div>
      </Container>
    </section>    
  )
}

export default Certificates