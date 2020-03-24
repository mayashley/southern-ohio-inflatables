import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'


const getHomeImg = graphql`
query homeImg{
    homeImg:file(relativePath:{eq:"bounceHouse2.png"}){
      childImageSharp{
        fluid{
          src
        }
      }
    }
  }
`


 const Hero = ({children}) => {
    const{homeImg} = useStaticQuery(getHomeImg);
    return (
        <header className='defaultHero'>
             <Img fluid={homeImg.childImageSharp.fluid} alt="kids bouncing"/>
            {children}
        </header>
    )
}
export default Hero