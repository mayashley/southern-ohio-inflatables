import React from "react"
import styles from "../css/footer.module.css"
import socialIcons from "../constants/social-icons"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
        {socialIcons.map((item, index) => {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          )
        })}
      </div>
      <div className={styles.copyright}>
        &copy; Southern Ohio Inflatables LLC.
        {new Date().getFullYear()}
      </div>
    </footer>
  )
}
export default Footer
