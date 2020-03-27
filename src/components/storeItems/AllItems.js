import React from 'react'
import ItemsList from './ItemsList'
import {useStaticQuery, graphql} from 'gatsby'


const getAllCombos = graphql`
query{
    combos:allContentfulCombos{
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


 const AllItems = () => {
     const {combos} = useStaticQuery(getAllCombos);

    return (
   <ItemsList combos={combos}/>
       
    )
}
export default AllItems
