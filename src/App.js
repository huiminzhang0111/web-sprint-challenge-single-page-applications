import React, { useState } from "react";
import Order from './components/Order';
import Home from './components/Home'
import { Route, Link, Switch } from 'react-router-dom';
import Confirmation from "./components/Confirmation";

const initialValues = {
  name: '',
  size: '',
  sauce: '',
  pepperoni: false,
  sausage: false,
  canadian_bacon: false,
  spicy_italian_sausage: false,
  grilled_chicken: false,
  onions: false,
  green_pepper: false,
  diced_tomatos: false,
  black_olives: false,
  roasted_garlic: false,
  artichoke_hearts: false,
  three_cheese: false,
  pineapple: false,
  extra_cheese: false,
  substitude: false,
  instructions: '',
}


const App = () => {
  const [order, setOrder] = useState([])
  const [formValues, setFormValues] = useState(initialValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue});
  }
  const submitForm = () => {
    const newPizza = {
      name: formValues.name,
      size: formValues.size,
      sauce: formValues.sauce,
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      canadian_bacon: formValues.canadian_bacon,
      spicy_italian_sausage: formValues.spicy_italian_sausage,
      grilled_chicken: formValues.grilled_chicken,
      onions: formValues.onions,
      green_pepper: formValues.green_pepper,
      diced_tomatos: formValues.diced_tomatos,
      black_olives: formValues.black_olives,
      roasted_garlic: formValues.roasted_garlic,
      artichoke_hearts: formValues.artichoke_hearts,
      three_cheese: formValues.three_cheese,
      pineapple: formValues.pineapple,
      extra_cheese: formValues.extra_cheese,
      substitude: formValues.substitude,
      instructions: formValues.instructions.trim(),
      quantity: formValues.quantity,
    }
    setOrder(newPizza)
  }

  return (
    <div className='App'>
        <div className='nav-links'>
          <nav><Link to='/'>Home</Link></nav>
          <nav><Link to='/help'>Help</Link></nav>
          <nav><Link to='/order'>Order</Link></nav>
        </div>
      <Switch>
        <Route exact path='/order'><Order 
          values={formValues}
          update={updateForm}
          submit={submitForm}
        /></Route>
        <Route exact path='/order/confirmation'><Confirmation details={order} /></Route>
        <Route path='/'><Home /></Route>
      </Switch>
    </div>
  );
};
export default App;
