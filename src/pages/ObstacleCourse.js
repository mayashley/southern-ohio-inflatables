import React from 'react'
import Layout from '../components/Layout'
import styles from '../css/items.module.css'
import ItemsList from '../components/storeItems/ItemsList'
import {useStaticQuery, graphql} from 'gatsby'
import Title from '../constants/Title'

const getAllObstacles = graphql`
query{
    combos:allContentfulObstacles{
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


 const ObstacleCourse = () => {
    const { combos } = useStaticQuery(getAllObstacles);
    return (
        <Layout>
            <div className={styles.itemsWrapper}>
            <Title  title="Obstacle Course's"/>
           <ItemsList combos={combos}/>
           </div>
        </Layout>
    )
}
export default ObstacleCourse