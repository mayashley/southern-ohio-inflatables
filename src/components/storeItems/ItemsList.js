import React, { Component } from 'react'
import styles from '../../css/items.module.css'
import SingleItem from './SingleItem'
// import Title from '../../constants/Title'


export default class ItemsList extends Component {
state={
    combos:[],
    sortedCombos:[],
}
componentDidMount(){
    this.setState({
combos:this.props.combos.edges,
sortedCombos:this.props.combos.edges,
})
}
    render() {
        return<section className={styles.itemsWrapper}>
{/* <Title title="Bounce House Combos"/> */}
<div className={styles.center}>
    {
        this.state.sortedCombos.map(({node})=>{
          return<SingleItem key={node.contentful_id} item={node}/>
        })
    }
</div>
        </section>
    }
}
