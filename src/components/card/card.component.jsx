import React from 'react';
import './Card.style.css';

export const Card = props =>{
    return (<div className="card-container ">
     <img  alt='robot' src={`https://robohash.org/${props.Robot.id}?set=set1&size=180x180`}/>
    <h2>{props.Robot.name}</h2>
    <p>{props.Robot.email}</p>
</div>)
    
}