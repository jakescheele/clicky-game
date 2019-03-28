import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src={props.src} id={props.id} onClick={(e)=>props.clickHandler(props.id, e)} />
        </div>
            )
        }
        
export default Card