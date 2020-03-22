import React from 'react'
import styles from '../css/Title.module.css'

 const Title = ({title, info, children}) => {
    return (
        <div className={styles.titleWrapper}>
           <h4>{title}</h4>
           <p>{info}</p>
           {children}
        </div>
    )
}
export default Title