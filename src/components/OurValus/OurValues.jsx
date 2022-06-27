import React from 'react'
import Container from '../Container'
import styles from './OurValues.module.css'

import { useTranslation } from 'react-i18next';

const OurValues = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.OurValues}>
    <Container>
        <div>
          <h1 className={styles.mainHeader}>{t('Our values')}</h1>
        </div>
        <ul className={styles.description}>
          <li className={styles.descriptionItem}>{t('Hope for the better future for Ukraine')}</li>
          <li className={styles.descriptionItem}>{t('Reliability, honesty and eagerness to help')}</li>
          {/* <h2 className={styles.values}>{t('Professionalism and competence')}</h2> 
          <p className={styles.descriptionItem}>{t('Our team consists of specialists who have the necessary knowledge and experience, love their work. This allows us to effectively solve the tasks and achieve better results.')}</p>

          <h2 className={styles.values}>{t('Responsibility')}</h2> 
          <p className={styles.descriptionItem}>{t('We work for the benefit of Ukrainian medicine. We do everything in our power to achieve our goals and objectives.')}</p>

          <h2 className={styles.values}>{t('Openness')}</h2> 
          <p className={styles.descriptionItem}>{t('We are open to cooperation for the benefit of our medical institutions. We value and respect all our partners and strive to make the interaction as comfortable and productive as possible.')}</p> */}

           
        </ul>
    </Container>
      </section>
    
  )
}

export default OurValues