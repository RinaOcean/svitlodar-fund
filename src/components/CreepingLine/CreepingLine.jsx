import { useTranslation } from "react-i18next"
import Container from "../Container"
import Marquee from "react-fast-marquee";
import styles from './CreepingLine.module.css';

const CreepingLine = () => {
  const {t} = useTranslation()

  return (
    // <Container>
      <Marquee className={styles.creepingLine}>
         <span>{t('A week ago, we received 4 tons of humanitarian aid from Germany - medicines, food, consumables for hospitals and hospitals in Kharkiv, and very touching gifts from children for children. ')}</span>
      </Marquee>
    // </Container>
  )
}

export default CreepingLine;