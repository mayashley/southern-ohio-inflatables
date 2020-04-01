import React from 'react'
import Layout from '../components/Layout'
import {useStaticQuery, graphql} from 'gatsby'
import Title from '../constants/Title'
import styles from '../css/items.module.css'
import ItemsList from '../components/storeItems/ItemsList'


const getAllWater = graphql`
query{
    combos:allContentfulWater{
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

 const WaterFriendly = () => {
    const { combos } = useStaticQuery(getAllWater);
    return (
        <Layout>
     <div className={styles.itemsWrapper}>
            <Title  title="Water Friendly Inflatables"/>
           <ItemsList combos={combos}/>
           </div>
        </Layout>
    )
}
export default WaterFriendly