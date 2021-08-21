import React from 'react'
import { Link } from 'react-router-dom'



export default function Confirmation(props) {

    const { details } = props;
    return (
        <div className='confirmation'>
            <h1 className='website-header'>Lambda Eats</h1>
            <div className='head-image'>
                <img className='home-image' src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='pizza image' />
            </div>
            <h2>Enjoy the Pizza!</h2>
            <h2>{details.name}</h2>
            <h3>{details.size}</h3>
            <h3>{details.sauce}</h3>
            {/* <h3>{details.pepperoni}</h3> */}
            {
                details.toppings && !!details.toppings.length &&
                <div>Toppings:
                    <ul>
                        {details.toppings.map((like,idx) => <li key={idx}>{like}</li>)}
                    </ul>
                </div>
            }
            <h3>Sub to gluten free?: {details.substitude}</h3>
            <h3>{details.instructions}</h3>
        </div>
    )
}