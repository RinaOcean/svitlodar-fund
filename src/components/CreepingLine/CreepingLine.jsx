import React from 'react'
import { useTranslation } from "react-i18next"
import Marquee from "react-fast-marquee";
import styles from './CreepingLine.module.css';
import ybHeart from '../../assets/yellowBlueHeart.svg'

const CreepingLine = () => {
  const {t} = useTranslation()
  return (    
      <Marquee className={styles.creepingLine} speed={90} gradientWidth={10}>
         <img className={styles.heartImg} src={ybHeart} alt='yellow-blue heart'/><span>{t('whatWeDoFirstAidKidLine2')}</span>
         <img className={styles.heartImg} src={ybHeart} alt='yellow-blue heart'/><span>{t('whatWeDoLvivLine3')}</span>
      </Marquee>    
  )
}

export default CreepingLine;
