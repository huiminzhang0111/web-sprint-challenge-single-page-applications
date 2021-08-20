import React from 'react'
import { Link } from 'react-router-dom'

export default function Confirmation() {
    return (
        <div className='confirmation'>
            <h1>this is confirmation page</h1>
            <h1 className='website-header'>Lambda Eats</h1>
            <div className='nav-links'>
                <Link to='/home'>Home</Link>
                <Link to='/help'>Help</Link>
            </div>
            <div className='head-image'>
                <img  src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='pizza image'
                        style={{
                            height: 300,
                            width: 500,
                        }} />
            </div>
            <h2>Enjoy the Pizza!</h2>
        </div>
    )
}