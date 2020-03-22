import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import WhyUS from '../components/WhyUS'
// import smParagraph from "../components/smParagraph"
import About from '../components/About'

export default () => (
  <Layout>
    <Hero>
      <Banner
        title="Southern Ohio Inflatables LLC."
        info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet bibendum metus, sit amet varius ex hendrerit eu."
      />
    </Hero>
    <About />
    <WhyUS />
  </Layout>
)
