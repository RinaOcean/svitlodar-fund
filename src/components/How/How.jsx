import styles from "./How.module.css";
import Container from "../Container";
import { useTranslation } from 'react-i18next';

const How = () => {
  const { t } = useTranslation();

  return (
      <section className={styles.how}>
    <Container>
        <div>
          <h1 className={styles.mainHeader}>{t('how we can help')}</h1>
        </div>
        <div className={styles.description}>
            <ul className={styles.descriptionList}>
             <li className={styles.descriptionListItem}> 
               {t('We provide humanitarian assistance in the war zone and adjacent territories:')}
               <ul className={styles.helpList}>
                 <li className={styles.helpListItem}>{t('we deliver food, medicines, personal hygiene products to people;')}</li>
                 <li className={styles.helpListItem}>{t('we take people to safe places;')}</li>
                 <li className={styles.helpListItem}>{t('we get medicines for hospitals and hospitals.')}</li>
                </ul>
             </li>
            <li className={styles.descriptionListItem}>{t('We are engaged in psychosomatic and social rehabilitation of victims. This was the main focus of the Foundation until February 2022, so we have proven proprietary methods.')}</li>
          </ul>
                  </div>
    </Container>
      </section>
  );
};

export default How;