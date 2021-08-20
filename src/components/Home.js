import React from 'react'
import { Route, Link, useHistory, Switch } from 'react-router-dom';
import Other from './Other'
import Order from './Order'

export default function Home() {
    // const history = useHistory()
    // const routeToOrder = () => {
    //     history.push('/order')
    // }

    return (
        <div className='home-wrapper'>
            <h1 className='website-header'>Lambda Eats</h1>
            {/* <div className='nav-links'>
            <Link to='/home'>Home</Link>
            <Link to='/help'>Help</Link>
            </div> */}
            <img className='home-image' src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='pizza image' />
            
            <div className='text-on-image'>
                <h3>Your favorite food delivered while coding</h3>
                {/* <Link to='/order'>Order Now!</Link> */}
                <Link to='/order'>Order Now!</Link>
                <Switch>
                    <Route path='/order'>
                        <Order />
                    </Route>
                </Switch>
            </div>
            <Other />
        </div>
    )
}