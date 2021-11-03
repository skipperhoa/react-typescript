import React from 'react'
import { DECREMENT, INCRECMENT } from '../../constants';
import { Counter } from '../../interfaces'
import { Styles } from './Style'
const ItemCounter: React.FC<Counter> = ({ title,count, fc_increment, fc_decrement }: Counter) => {
    const { button, span } = Styles;
    return (
        <div>
            <h1>{title}</h1>
            <button onClick={fc_increment} style={button}>{INCRECMENT}</button>
            <span style={span}>{count}</span>
            <button onClick={fc_decrement} style={button}>{DECREMENT}</button>
        </div>
    )
}
export default ItemCounter;