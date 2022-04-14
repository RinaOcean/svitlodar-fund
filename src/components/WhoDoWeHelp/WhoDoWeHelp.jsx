import Container from '../Container'
import styles from './WhoDoWeHelp.module.css'
import { useTranslation } from 'react-i18next';

const WhoDoWeHelp = () => {
  const { t } = useTranslation();

  return (
    <section id="whodowehelp" className={styles.WhoDoWeHelp}>
      <Container>
        <h1 className={styles.headding}>{t('whom do we help')}</h1>
        <p className={styles.description}>{t('At the moment we are helping the residents of Kharkiv only')}</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>{t('civilians suffering during the fighting in Ukraine;')}</li>
          <li className={styles.listItem}>{t('participants in hostilities and members of their families;')}</li>
          <li className={styles.listItem}>{t('families of the dead and missing.')}</li>
        </ul>
       
      </Container>
    </section>
    
  )
}

export default WhoDoWeHelp