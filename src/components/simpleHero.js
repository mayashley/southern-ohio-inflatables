import React from 'react'
import styles from '../css/simpleHero.module.css'
import aboutImg from '../images/aboutImg.jpeg'

const SimpleHero = () => {
    return (
        <div className={styles.simpleHeroWrapper}>
           <img src={aboutImg} alt="faq link hero"/> 
        </div>
    )
}
export default SimpleHero
