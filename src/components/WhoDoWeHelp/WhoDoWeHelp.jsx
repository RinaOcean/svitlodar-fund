import Container from '../Container'
import styles from './WhoDoWeHelp.module.css'
import { useTranslation } from 'react-i18next';

const WhoDoWeHelp = () => {
  const { t } = useTranslation();

  return (
    <section id="whodowehelp" className={styles.WhoDoWeHelp}>
      <Container>
        <h1 className={styles.headding}>{t('who do we help')}</h1>
        
        <ul className={styles.list}>
          <li className={styles.listItem}>гражданским лицам, пострадавшим во время боевых действий в Украине;</li>
          <li className={styles.listItem}>ветеранам АТО и членам их семей;</li>
          <li className={styles.listItem}>семьям погибших и пропавших без вести.</li>
        </ul>
       
      </Container>
    </section>
    
  )
}

export default WhoDoWeHelp