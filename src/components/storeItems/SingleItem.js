import React from 'react'
import Image from 'gatsby-image'
import styles from "../../css/singleItems.module.css"
import AniLink from 'gatsby-plugin-transition-link/AniLink'



 const SingleItem = ({item}) => {
   const {name, price, slug, images} = item
let mainImage = images[0].fluid;


  return (
    <article className={styles.singleItems}>
    <div className={styles.imgContainer}>
      <Image fluid={mainImage} className={styles.img} alt="single tour" />
      <AniLink fade className={styles.link} to={`/BounceCombo/${slug}`}>
        details
      </AniLink>
    </div>
    <div className={styles.footer}>
      <h3>{name}</h3>
        <div className={styles.details}>
          <h5>price: ${price}</h5>
        </div>
      </div>
  </article>
)
}

export default SingleItem
