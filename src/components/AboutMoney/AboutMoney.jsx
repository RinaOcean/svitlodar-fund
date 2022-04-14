import Container from '../Container'
import styles from './AboutMoney.module.css'

import { useTranslation } from 'react-i18next';

const AboutMoney = () => {
  const { t } = useTranslation();

  return (
    <section id="AboutMoney" className={styles.AboutMoney}>
      <Container>
        <h1 className={styles.headding}>{t('About money')}</h1>
        
        <p className={styles.description}>
        {t('All financial activities are absolutely transparent and understandable for donors. A specific donation (money, food, medicine, etc.) can, at the request of the donor, be targeted or go to the general aid fund. Now the money is mainly spent on the purchase of prescription and non-European medicines, special food for sick children and fuel for the cars that deliver it all.')}
        </p>
        
      </Container>
    </section>
    
  )
}

export default AboutMoney