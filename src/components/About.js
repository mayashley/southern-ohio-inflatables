import React from "react"
import styles from "../css/About.module.css"
import Title from '../constants/Title'
import SlideShow from '../components/SlideShow'


const About = () => {
 

  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImgWrapper}>
          <div className={styles.imgContainer}>
         <SlideShow/>
          </div>
        </article>
        <div className={styles.aboutInfo}>
          <Title title="Who We Are..." info='felis feugiat sapien, sit amet mattis purus felis eget purus. Ut
            pretium iaculis tellus, ut cursus ipsum dictum sed. Donec tincidunt
            purus sit amet libero pellentesque luctus. Donec blandit ornare dui
            at efficitur.'/>
          <button type="button" className="btn-primary">
           Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
export default About
