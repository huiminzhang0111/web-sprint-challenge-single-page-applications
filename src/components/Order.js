import React, { useState } from 'react';
import { 
    useParams, 
    useRouteMatch,
    Route,
    Switch,
    Link
  } from 'react-router-dom';
import Toppings from './Toppings'
import Sauce from './Sauce'
import Size from './Size'
import Substitude from './Substitude'
import Instructions from './Instructions'
import Confirmation from './Confirmation'



function ButtonIncrement(props) {
  
    return (
      <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
      +1
      </button>
    )
 }
 function ButtonDecrement(props) {
   
   return (
     <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
     -1
     </button>
   )
 }
 function Display(props) {
   return (
     <label style={{ marginLeft: '.5rem'}} >{props.message}</label>
   )
 }



export default function Order(props) {
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if(counter<=1) {
        decrementCounter = () => setCounter(1);
    }

    const { pizza } = props;


    return (
        <div className='pizza-order'>
            <h1>Lambda Eats</h1>
            <h2>Build Your Own Pizza</h2>
            <img className='home-image' src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='pizza image' />
            <h3>Build Now!</h3>
            <Size />
            <Sauce />
            <Toppings />
            <Substitude />
            <Instructions />
            <div className='quantity'> 
                <h3>Quantity</h3>
                <ButtonIncrement onClickFunc={incrementCounter}/>
                <Display message={counter}/> 
                <ButtonDecrement onClickFunc={decrementCounter}/>
            </div>
        <Link to='/order/confirmation'><button className='confirm-button'>Confirm!</button></Link>
            {/* <div className='nav-links'>
                <Link to='/order'></Link>
                <Link to='/order/confirmation'>Confirm!</Link>
            </div> */}
            {/* <Switch>
                <Route path="/order/confirmation">
                    <Confirmation />
                </Route>
            </Switch> */}
        </div>
    )
}