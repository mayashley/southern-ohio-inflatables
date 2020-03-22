import React from "react"
import Layout from "../components/Layout"
import Title from "../constants/Title"
import Questions from '../constants/Questions'

const Faq = () => {
  return (
    <Layout>
        <div>
      <Title title="We have answers!" />
      </div>
      <div>
          {Questions.map((item, index) => {
            return (
              <article key={index}>
                <span>{item.icon}</span>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            )
          })}
        </div>
    </Layout>
  )
}
export default Faq
