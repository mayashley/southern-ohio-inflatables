import React from "react"
import styles from "../css/About.module.css"
import Title from "../constants/Title"
import SlideShow from "../components/SlideShow"

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutCenter}>
        <div className={styles.itemsWrapper}>
          <Title title="Who We Are..." />
        </div>
        <article className={styles.aboutImgWrapper}>
          <div className={styles.imgContainer}>
            <SlideShow />
          </div>
          <div className={styles.paragraphContainer}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              cursus metus eu purus tempus, id lacinia turpis ornare. Mauris
              lorem eros, scelerisque id consequat ut, tincidunt a orci. Nunc mi
              nisl, tincidunt in accumsan vitae, euismod nec dolor.
            </p>
          </div>
        </article>
        <div className={styles.aboutInfo}>
          <button type="button" className="btn-primary">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}
export default About
