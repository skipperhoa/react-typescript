import React, { useState, useEffect } from 'react'
import { CALL_API } from '../../api';
import TextNode from './TextNode';

export default function Item() {
    const [textnode,setTextNode] = useState([])
    useEffect(() => {
        var requestOptions = {
            _endpoint: 'https://api.publicapis.org/entries',
            _method: "GET",
        }
        CALL_API(requestOptions)
            .then(item => {
                const { entries } = item;
                setTextNode(entries);
            })
            .catch(err => console.log(err));
    }, [])
    return (
        <div  style={{ textAlign: 'center',display:'flex', flexWrap:'wrap'}}>
           {
               textnode.length>0 && textnode.map(item=><TextNode {...item} />)
           }
        </div>
    )
}
