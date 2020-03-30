import React from "react"
import styles from "../css/contact.module.css"
const Contact = () => {
  return (
    <section className={styles.contact}>
     
      <div className={styles.center}>
        <form
          action="https://formspree.io/mvorwnwo"
          method="POST"
          className={styles.form}
        >
          <div>
            <input
              type="text"
              name="name"
              id="name"
              className={styles.formControl}
              placeholder="john smith"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              className={styles.formControl}
              placeholder="email@email.com"
            />
          </div>
          <div>
            <textarea
              name="message"
              id="message"
              rows="12"
              className={styles.formControl}
              placeholder="Send us a detailed message and we will be pleased to assist you!."
            />
          </div>
          <div className={styles.checkBoxes}>
              <input required type="checkbox" id="agree" name="Term and Conditions" value="sender agrees to terms and conditions of equiptment rental"/>
          <p>(insert custom agreement here)</p>
          </div>  
          <div>
            <input
              type="submit"
              value="submit here"
              className={styles.submit}
            />
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact