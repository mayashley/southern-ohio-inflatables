import React, { useState } from "react"
import { FaAlignRight } from "react-icons/fa"
import { connect } from 'react-redux'
// import SocialIcons from "../constants/social-icons"
import styles from "../css/navbar.module.css"
import AniLink from 'gatsby-plugin-transition-link/AniLink'


const Navbar = (props) => {
    const [isOpen, setNav] = useState()
    const toggleNav = () => {
      setNav(isOpen => !isOpen)
    }
return(
<div className={styles.navbar}>
<div className={styles.navHeader}>
<button type="button" className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
          </div>
          <ul className={ isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`}>
 <li><AniLink fade to='/'>Home</AniLink></li>
 <div className={styles.dropdown}>
     {/* <button className={styles.dropbtn}>Inflatables</button> */}
     <AniLink fade className={styles.dropbtn}>Inflatables</AniLink>
 <ul className={styles.dropdownContent}>
      <li><AniLink fade to='/BounceHouses/'>Bounce Houses</AniLink></li>
      <li><AniLink fade to='/BounceCombo/'>Bounce House Slide Combos</AniLink></li>
      <li><AniLink fade to='/Slides/'>Slides</AniLink></li>
      <li><AniLink fade to='/ObstacleCourse/'>Obstacle Courses</AniLink></li>
      <li><AniLink fade to='/WaterFriendly/'>Water Friendly</AniLink></li>
      <li><AniLink fade to='/Interactives/'>Inflatable Interactives</AniLink></li>
      <li><AniLink fade to='/SelfPickUp/'>Self Pick-up Inflatables</AniLink></li>
    </ul>
    </div>
    <div className={styles.dropdown}>
    <AniLink fade className={styles.dropbtn}>Games</AniLink>
     {/* <button className={styles.dropbtn}>Games</button> */}
 <ul className={styles.dropdownContent}>
      <li><AniLink fade to='/DunkBooth/'>Dunk Booth</AniLink></li>
    </ul>
    </div>
    <div className={styles.dropdown}>
    <AniLink fade className={styles.dropbtn}>Party Equiptment</AniLink>
     {/* <button className={styles.dropbtn}>Party Equiptment</button> */}
 <ul className={styles.dropdownContent}>
      <li><AniLink fade to='/Concessions/'>Concessions</AniLink></li>
      <li><AniLink fade to='/TablesAndChairs/'>Tables and Chairs</AniLink></li>
      <li><AniLink fade to='/Cinema/'>Portable Cinema</AniLink></li>
      <li><AniLink fade to='/Tents/'>Tents</AniLink></li>
    </ul>
    </div>
    <li><AniLink fade to='/Faq'>FAQ's</AniLink></li>
    <div className={styles.dropdown}>
    <AniLink fade className={styles.dropbtn}>Contact</AniLink>
     {/* <button className={styles.dropbtn}>Party Equiptment</button> */}
 <ul className={styles.dropdownContent}>
      <li><AniLink fade to='/Contact/'>Ask us Questions</AniLink></li>
      <li><AniLink fade to='/SubmitQuote/'>Submit A Quote</AniLink></li>
    </ul>
    </div>
    <li><AniLink fade to='/Deposit'>Pay Deposit</AniLink></li>
    </ul>

    <button>
      {props.listState.list.length}
    </button>
</div>

)
}


export default connect(state => ({
  listState: state,
}))(Navbar)
