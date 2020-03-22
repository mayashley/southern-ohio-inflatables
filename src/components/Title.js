import React from 'react'
// import styles from '../css/banner.module.css'

 const Title = ({title, info, children}) => {
    return (
        <div>
           <h4>{title}</h4>
           {children}
        </div>
    )
}
export default Title