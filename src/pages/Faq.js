import React from "react"
import Layout from "../components/Layout"
import Title from "../constants/Title"
import Questions from '../constants/Questions'
import styles from '../css/faq.module.css'

const Faq = () => {
  return (
    <Layout>
      <div className={styles.faqTitleWrapper}>
       <Title title="Frequently Asked Questions" />
       </div>
      <div className={styles.faqWrapper}>
        <div className={styles.faqSecondary}>
      <div className={styles.faqinfoWrapper}>
          {Questions.map((item, index) => {
            return (
              <article key={index}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            )
          })}
          </div>
        </div>
        </div>
    </Layout>
  )
}
export default Faq
