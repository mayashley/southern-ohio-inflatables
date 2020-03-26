import React from 'react'
import SingleItem from '../storeItems/SingleItem'
import {useStaticQuery, graphql} from 'gatsby'
import Title from '../../constants/Title'
import styles from '../../css/items.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

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
        <section className={styles.tours}>
            <Title title='Featured items'/>
            <div className={styles.center}>
            {items.map(({node}) => {
                return <SingleItem key={node.contentful_id} item={node}/>
            })}
            </div>
            <AniLink fade to="/BounceCombo" className={styles.btnPrimary}>
               View All
            </AniLink>
            </section>
    )
}
export default FeaturedItems
