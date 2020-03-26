import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Banner from "../constants/Banner"
import WhyUS from '../components/WhyUS'
import About from '../components/About'
import FeaturedItems from '../components/storeItems/FeaturedItems'


export default () => (
  <Layout>
    <Hero>
      <Banner
        title="Southern Ohio Inflatables LLC."
      />
    </Hero>
    <About />
    <WhyUS />
    <FeaturedItems/>
    
  </Layout>
)
