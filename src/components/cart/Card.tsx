import React from 'react'
import { Item } from '../../interfaces';
import { Styles } from './Styles';
const Card : React.FC<Item> = (Item) => {
   
    return (
        <div style={Styles.card}>
            <img src={Item.image} style={Styles.img}/>
            <h5 style={Styles.title}>{Item.title}</h5>
            <span>{Item.price}</span>
            <button style={Styles.button}>+ Add Cart</button>
        </div>
    )
}
export default Card;