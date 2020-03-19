import React, { useState } from "react"
import { FaAlignRight } from "react-icons/fa"
import SocialIcons from "../constants/social-icons"
import styles from "../css/navbar.module.css"
import { Link } from "gatsby"


const Navbar = () => {

return(
<div className={styles.navbar}>
 <a><Link to='/'>Home</Link></a>
 <div className={styles.dropdown}>
     <button className={styles.dropbtn}>Inflatables</button>
 <div className={styles.dropdownContent}>
      <a href="#">Bounce Houses</a>
      <a href="#">Bounce House Slide Combos</a>
      <a href="#">Slides</a>
      <a href="#">Obstacle Courses</a>
      <a href="#">Inflatable Interactives</a>
      <a href="#">Water Friendly</a>
    </div>
    </div>
    <div className={styles.dropdown}>
     <button className={styles.dropbtn}>Party Tents</button>
 <div className={styles.dropdownContent}>
      <a><Link to='/PopUpTents/'>Pop-Up Tents</Link></a>
      <a href="#">Pole Tents</a>
      <a href="#">High Peak Frame Tents</a>
    </div>
    </div>
    <div className={styles.dropdown}>
     <button className={styles.dropbtn}>Games</button>
 <div className={styles.dropdownContent}>
      <a><Link to='/DunkBooth/'>Dunk Booth</Link></a>
    </div>
    </div>
    <div className={styles.dropdown}>
     <button className={styles.dropbtn}>Party Equiptment</button>
 <div className={styles.dropdownContent}>
      <a><Link to='/Concessions/'>Concessions</Link></a>
      <a><Link to='/TablesAndChairs/'>Tables and Chairs</Link></a>
      <a><Link to='/Cinema/'>Portable Cinema</Link></a>
    </div>
    </div>
    <a><Link to='/Faq'>FAQ's</Link></a>
    <a><Link to='/Contact'>Contact US</Link></a>
    <a><Link to='/Deposit'>Pay Deposit</Link></a>
</div>
)
}
export default Navbar
