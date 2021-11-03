import React from 'react'
import { TxtNode, Animals } from '../interfaces';
const TextNode: React.FC<Animals> = (Animals) => {
    return (


        <div style={{ width: '31.33%', borderWidth: 1, borderColor: '#000', borderStyle: 'dotted', padding: 10, margin: '1%', fontSize: 13, boxSizing: 'border-box' }}>
            <p>API:<a href={Animals.API} target="_blank">{Animals.API}</a></p>
            <p>Description: {Animals.Description}</p>
            <p>Auth: {Animals.Auth}</p>
            <p>HTTPS: {Animals.HTTPS ? "true" : "false"}</p>
            <p>Cors: {Animals.Cors ? "yes" : "no"}</p>
            <p>Link: <a href={Animals.Link} target="_blank">{Animals.Link}</a></p>
            <p>Category: {Animals.Category}</p>
        </div>


    )
}
export default TextNode;

