import React from 'react'
import Layout from '../components/Layout'
import {useStaticQuery, graphql} from 'gatsby'
import Title from '../constants/Title'
import styles from '../css/items.module.css'
import ItemsList from '../components/storeItems/ItemsList'


const getAllInteractives = graphql`
query{
    combos:allContentfulInteractives{
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


 const Interactives = () => {
    const { combos } = useStaticQuery(getAllInteractives);
    return (
        <Layout>
            <div className={styles.itemsWrapper}>
            <Title  title="Inflatable Interactives"/>
           <ItemsList combos={combos}/>
           </div>
        </Layout>
    )
}
export default Interactives