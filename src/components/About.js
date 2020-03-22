import React from "react"
import aboutImg from "../images/aboutImg.jpeg"
import styles from "../css/About.module.css"

const About = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImgWrapper}>
          <div className={styles.imgContainer}>
            <img src={aboutImg} alt="about company" />
          </div>
        </article>
        <div className={styles.aboutInfo}>
          <h4>Who we are...</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eu
            dui accumsan, bibendum dui vitae, mollis enim. Donec quis eros
            augue. Nunc consectetur sed magna sit amet eleifend
          </p>
          <p>
            {" "}
            felis feugiat sapien, sit amet mattis purus felis eget purus. Ut
            pretium iaculis tellus, ut cursus ipsum dictum sed. Donec tincidunt
            purus sit amet libero pellentesque luctus. Donec blandit ornare dui
            at efficitur.{" "}
          </p>
          <button type="button" className="btn-primary">
            Have Questions?
          </button>
        </div>
      </div>
    </section>
  )
}
export default About
