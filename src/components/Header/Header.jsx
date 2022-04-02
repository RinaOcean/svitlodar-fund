import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.svitloDarLogo}>
        <div>
         <span className={styles.svitlo}>svitlo</span>
         <span className={styles.dar}>dar</span>
        </div>
        <span className={styles.charityFund}>charity fund</span>
      </div>

    </div>
  )
}

export default Header