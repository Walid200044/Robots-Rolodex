import React from 'react';
import { Card } from '../card/card.component';
import './Card-List.style.css';


export const CardList = props =>{
    return <div className="card-list">
        {props.Robots.map((Robot) => (
         <Card key={Robot.id} Robot={Robot}/>
      ))}</div>
}