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
import Quantity from './Quantity'
import { useHistory } from "react-router-dom"; 



export default function Order(props) {
    // //for the button
    // const [counter, setCounter] = useState(1);
    
    // const incrementCounter = () => setCounter(counter + 1);
    // let decrementCounter = () => setCounter(counter - 1);
    // if(counter<=1) {
    //     decrementCounter = () => setCounter(1);
    // }
    let history = useHistory();

    //actual codes start heres
    const { values, update, submit } = props;

    const onChange = evt => {
        const name = evt.target.name;
        const value = evt.target.value;
        update(name, value)
    }

    const onSubmit = evt => {
        evt.preventDefault();
        submit();
        history.push("/order/confirmation")
    }

    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <h1>Lambda Eats</h1>
            <h2>Build Your Own Pizza</h2>
            <img className='home-image' src="https://images.pexels.com/photos/263041/pexels-photo-263041.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt='pizza image' />
            <h3>Build Now!</h3>
            <div id='name-input'>
                <label>What is your name? &nbsp;
                    <input 
                        type='text'
                        name='name'
                        value={values.name}
                        minLength='2'
                        onChange={onChange}
                    />
                </label>
            </div>
            <Size change={onChange} value={values} />
            <Sauce change={onChange} value={values}/>
            <Toppings change={onChange} value={values}/>
            <Substitude change={onChange} value={values}/>
            <Instructions change={onChange} value={values}/>
            {/* <div className='quantity'> 
                <h3>Quantity</h3>
                <ButtonIncrement onClickFunc={incrementCounter}/>
                <Display message={counter}/> 
                <ButtonDecrement onClickFunc={decrementCounter}/>
            </div> */}
            <Quantity />
            <button id='order-button'>Confirm!</button>
        {/* <Link to='/order/confirmation'><button id='order-button'>Confirm!</button></Link> */}
            {/* <div className='nav-links'>
                <Link to='/order'></Link>
                <Link to='/order/confirmation'>Confirm!</Link>
            </div> */}
            {/* <Switch>
                <Route path="/order/confirmation">
                    <Confirmation />
                </Route>
            </Switch> */}
        </form>
    )
}