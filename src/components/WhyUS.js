import React from 'react'
import Title from '../constants/Title'
import styles from '../css/whyUS.module.css'
import services from '../constants/services'


 const WhyUS = () => {
    return (
        <div className={styles.whyUsWrapper}>
            <div className={styles.titleWrapper}>
             <Title title="Why Choose Us?"/>
             </div>
        <div className={styles.services}>
            <div className={styles.center}>
                {
                    services.map((item, index)=>{
                        return <article key={index} className={styles.services}>
                            <span>{item.icon}</span>
                            <h4>{item.title}</h4>
                            <p>{item.text}</p>
                        </article>
                    })
                }
            </div>
            <div className={styles.btnWrapper}>
            <button type="button" className="btn-primary">
            Have Questions?
          </button>
          </div>
        </div>
        </div>
    )
}
export default WhyUS