import React, { useState } from "react"
import { FaAlignRight } from "react-icons/fa"
import SocialIcons from "../constants/social-icons"
import styles from "../css/navbar.module.css"
import { Link } from "gatsby"


const Navbar = () => {
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
 <li><Link to='/'>Home</Link></li>
 <div className={styles.dropdown}>
     <button className={styles.dropbtn}>Inflatables</button>
 <ul className={styles.dropdownContent}>
      <li><Link to='/BounceHouses/'>Bounce Houses</Link></li>
      <li><Link to='/BounceCombo/'>Bounce House Slide Combos</Link></li>
      <li><Link to='/Slides/'>Slides</Link></li>
      <li><Link to='/ObstacleCourse/'>Obstacle Courses</Link></li>
      <li><Link to='/WaterFriendly/'>Water Friendly</Link></li>
      <li><Link to='/Interactives/'>Inflatable Interactives</Link></li>
    </ul>
    </div>
    <div className={styles.dropdown}>
     <button className={styles.dropbtn}>Party Tents</button>
 <ul className={styles.dropdownContent}>
      <li><Link to='/PopUpTents/'>Pop-Up Tents</Link></li>
      <li><Link to='/PoleTents/'>Pole Tents</Link></li>
      <li><Link to='/HighPeakTents/'>High Peak Frame Tents</Link></li>
    </ul>
    </div>
    <div className={styles.dropdown}>
     <button className={styles.dropbtn}>Games</button>
 <ul className={styles.dropdownContent}>
      <li><Link to='/DunkBooth/'>Dunk Booth</Link></li>
    </ul>
    </div>
    <div className={styles.dropdown}>
     <button className={styles.dropbtn}>Party Equiptment</button>
 <ul className={styles.dropdownContent}>
      <li><Link to='/Concessions/'>Concessions</Link></li>
      <li><Link to='/TablesAndChairs/'>Tables and Chairs</Link></li>
      <li><Link to='/Cinema/'>Portable Cinema</Link></li>
    </ul>
    </div>
    <li><Link to='/Faq'>FAQ's</Link></li>
    <li><Link to='/Contact'>Contact US</Link></li>
    <li><Link to='/Deposit'>Pay Deposit</Link></li>
    </ul>
</div>

)
}
export default Navbar
