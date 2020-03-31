import React from 'react'
import Layout from '../components/Layout'
import {useStaticQuery, graphql} from 'gatsby'
import Title from '../constants/Title'
import styles from '../css/items.module.css'
import ItemsList from '../components/storeItems/ItemsList'


const getAllSlides = graphql`
query{
    combos:allContentfulSlides{
      edges{
        node{
          name
          price
          slug
          contentful_id
          images{
            fluid{
                ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Slides = () => {
    const { combos } = useStaticQuery(getAllSlides);
    return (
       <Layout>
             <div className={styles.itemsWrapper}>
            <Title  title="Slides"/>
           <ItemsList combos={combos}/>
           </div>
       </Layout>
    )
}
export default Slides