import Container from '../Container'
import styles from './AboutUs.module.css'
import yellowEclps from '../../assets/yellowEllipse.svg'
import eclipseTwo from '../../assets/ellipseTwo.svg'

const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <Container>
        <h1 className={styles.headding}>about us</h1>
        <div className={styles.imgWrapper}>
          <p className={styles.description}>
            Charitable Foundation "Svitlodar" was founded on october 01, 2015.
            The Foundation has become a logical extension of the volunteer activities 
            carried out by us in 2014-2015, aimed at assisting in the psychosomatic 
            rehabilitation of persons injured during the anti-terrorist operation in 
            the East of Ukraine.
          </p>
          {/* <img className={styles.eclipseOneImg} src={yellowEclps} alt='yellow-blue heart'/> */}
          <img className={styles.eclipseTwo} src={eclipseTwo} alt='yellow-blue heart'/>
        </div>
      </Container>
    </section>
    
  )
}

export default AboutUs