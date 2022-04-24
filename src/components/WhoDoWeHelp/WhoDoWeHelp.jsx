import Container from '../Container'
import styles from './WhoDoWeHelp.module.css'
import { useTranslation } from 'react-i18next';

const WhoDoWeHelp = () => {
  const { t } = useTranslation();

  return (
    <section id="whodowehelp" className={styles.WhoDoWeHelp}>
      <Container>
        <h1 className={styles.headding}>{t('Our mission')}</h1>
        <p className={styles.description}>{t('We help local residents of city of Kharkiv and Kharkiv region')}</p>
        <ul className={styles.list}>
          <li className={styles.listItem}>{t('civilians in need during the military hostilities in the area;')}</li>
          <li className={styles.listItem}>{t('active military service people and members of their families;')}</li>
          <li className={styles.listItem}>{t('families of murder victims and missing persons.')}</li>
        </ul>
       
      </Container>
    </section>
    
  )
}

export default WhoDoWeHelp