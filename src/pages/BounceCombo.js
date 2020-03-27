import React from 'react'
import Layout from '../components/Layout'
import AllItems from '../components/storeItems/AllItems'
import Title from '../constants/Title'
import styles from '../css/items.module.css'


 const BounceCombo = () => {
    return (
        <Layout>
             <div className={styles.itemsWrapper}>
            <Title  title="Bounce House Combo's"/>
         <AllItems/>
         </div>
        </Layout>
    )
}
export default BounceCombo