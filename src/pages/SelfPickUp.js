import React from 'react'
import Layout from '../components/Layout'
import {useStaticQuery, graphql} from 'gatsby'
import Title from '../constants/Title'
import styles from '../css/items.module.css'
import ItemsList from '../components/storeItems/ItemsList'


const getAllSelf = graphql`
query{
    combos:allContentfulSelf{
      edges{
        node{
          name
          price
          slug
          contentful_id
          images{
            fluid{
                ...GatsbyContentfulFluid_
            }
          }
        }
      }
    }
  }
`

const SelfPickUp = () => {
    const { combos } = useStaticQuery(getAllSelf);
    return (
       <Layout>
           <div className={styles.itemsWrapper}>
            <Title  title="Inflatables Avilable For Self Pick-Up"/>
           <ItemsList combos={combos}/>
           </div>
       </Layout>
    )
}
export default SelfPickUp