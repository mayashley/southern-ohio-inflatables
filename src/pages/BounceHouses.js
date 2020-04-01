import React from 'react'
import Layout from '../components/Layout'
import {useStaticQuery, graphql} from 'gatsby'
import Title from '../constants/Title'
import styles from '../css/items.module.css'
import ItemsList from '../components/storeItems/ItemsList'


const getOriginalBounceHouses = graphql`
query{
    combos:allContentfulBounce{
      edges{
        node{
          name
          price
          slug
          contentful_id
          images{
            fluid{
                ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`


 const BounceHouses = () => {
    const { combos } = useStaticQuery(getOriginalBounceHouses);
    return (
        <Layout>
            <div className={styles.itemsWrapper}>
            <Title  title="Bounce Houses"/>
           <ItemsList combos={combos}/>
           </div>
        </Layout>
    )
}
export default BounceHouses
