import React, { useState, useEffect } from 'react'
import { CALL_API } from '../../api';
import { METHOD_GET, URL_API } from '../../constants';
import Card from './Card';
import { Styles } from './Styles';
const Carts : React.FC=()=>{
    const [items,setItems] = useState([])
  
    useEffect(() => {
        var requestOptions = {
            _endpoint: URL_API,
            _method: METHOD_GET,
        }
        CALL_API(requestOptions)
            .then(result => {
                console.log(result);
                setItems(result);
            })
            .catch(err => console.log(err));
    }, [])
    return (
        <div style={Styles.container as React.CSSProperties}>
            {
                items.length > 0 && items.map(item=><Card {...item} />)
            }
        </div>
    )
}

export default Carts;