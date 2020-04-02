import React from 'react'
import {graphql} from 'gatsby'




 const CombosTemplate = ({data}) => {

    return<h1>{data.combos.name}</h1>
}

export const CombosQuery = graphql`
query($slug:String){
    combos:contentfulCombos(slug:{eq:$slug}){
      name
      price
      description{
        description
      }
      images{
        fluid{
          src
        }
      }
    }
  }

`

export default CombosTemplate