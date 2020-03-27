import React from 'react'
import SingleItem from '../storeItems/SingleItem'
import {useStaticQuery, graphql} from 'gatsby'
import Title from '../../constants/Title'
import styles from '../../css/items.module.css'

const getFeaturedItems = graphql`
query{
    featuredCombos:allContentfulCombos(filter:{featured:{eq:true}}){
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


 const FeaturedItems = () => {
     const response = useStaticQuery(getFeaturedItems);
    //  console.log(response)
     const items = response.featuredCombos.edges
    //  console.log(items)


    return (
        <section className={styles.itemsWrapper}>
            <Title title='Most popular rentals'/>
            <div className={styles.center}>
            {items.map(({node}) => {
                return <SingleItem key={node.contentful_id} item={node}/>
            })}
            </div>
            </section>
    )
}
export default FeaturedItems
