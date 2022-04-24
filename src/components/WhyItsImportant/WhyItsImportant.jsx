import Container from '../Container'
import styles from './WhyItsImportant.module.css'

import { useTranslation } from 'react-i18next';

const WhyItsImportant = () => {
  const { t } = useTranslation();

  return (
    <section id="whyItsImportant" className={styles.WhyItsImportant}>
      <Container>
        <h1 className={styles.headding}>{t('why it is important')}</h1>
        
        <p className={styles.description}>
          <span className={styles.descriptionItem}>{t('This war has touched every Ukrainian family and that is why our mission is so important.')}</span>
          <span className={styles.descriptionItem}>{t(`Over ten million people have fled their homes in Ukraine to other parts of the country or across the border since the Russia's invasion started, and this figure is growing every day.`)}</span>
          <span className={styles.descriptionItem}>{t('Some refugees were forced to leave their homes for the second time since the Donbas conflict in 2013-2014.')}</span>
          <span className={styles.descriptionItem}>{t('Even helping a few people a day would make a huge difference for them and their families.')}</span>
        </p>
        
      </Container>
    </section>
    
  )
}

export default WhyItsImportant