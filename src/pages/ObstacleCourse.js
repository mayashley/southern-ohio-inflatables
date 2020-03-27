import React from 'react'
import Layout from '../components/Layout'
import ItemsList from '../components/storeItems/ItemsList'
import {useStaticQuery, graphql} from 'gatsby'

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
           <ItemsList combos={combos}/>
        </Layout>
    )
}
export default ObstacleCourse