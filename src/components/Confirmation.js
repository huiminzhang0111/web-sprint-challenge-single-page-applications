import React from 'react'
import { Link } from 'react-router-dom'

export default function Confirmation() {
    return (
        <div className='confirmation'>
            <h1 className='website-header'>Lambda Eats</h1>
            <div className='head-image'>
                <img className='home-image' src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='pizza image' />
            </div>
            <h2>Enjoy the Pizza!</h2>
        </div>
    )
}