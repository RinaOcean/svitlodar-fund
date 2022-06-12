import { useTranslation } from "react-i18next"
import Container from "../Container"
import Marquee from "react-fast-marquee";
import styles from './CreepingLine.module.css';
import ybHeart from '../../assets/yellowBlueHeart.svg'

const CreepingLine = () => {
  const {t} = useTranslation()

  return (    
      <Marquee className={styles.creepingLine} speed={65} gradientWidth={50}>
         <img className={styles.heartImg} src={ybHeart} alt='yellow-blue heart'/>
         <span>{t('A week ago, we received 4 tons of humanitarian aid from Germany - medicines, food, consumables for hospitals in Kharkiv, and very touching gifts from children for children. ')}</span>
         <img className={styles.heartImg} src={ybHeart} alt='yellow-blue heart'/>
      </Marquee>    
  )
}

export default CreepingLine;