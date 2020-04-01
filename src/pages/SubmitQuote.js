import React from 'react'
import Layout from '../components/Layout'
import Quote from '../components/Quote'
import Title from '../constants/Title'
import styles from "../css/items.module.css"


 const SubmitQuote = () => {
    return (
        <Layout>
             <div className={styles.itemsWrapper}>
           <Title title="Ready to submit a quote?"/>
            <Quote/>
            </div>
        </Layout>
    )
}
export default SubmitQuote