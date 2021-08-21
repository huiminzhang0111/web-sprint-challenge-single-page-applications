import React from 'react';

export default function Toppings(props) {
    const { change, value } = props;
    return (
        <div className='form-group-checkbox'>
            <h3>Add Toppings</h3>
            <h4>Choose up to 10</h4>
            <div className='all-topping'>
                <div className='first-column'>
                    <label>Pepperoni
                        <input 
                            type="checkbox"
                            name="pepperoni"
                            onChange={change}
                            checked={value.pepperoni}
                        />
                    </label>
                    <label>Sausage
                        <input 
                            type='checkbox'
                            name='sausage'
                            onChange={change}
                            checked={value.sausage}
                        />
                    </label>
                    <label>Canadian Bacon
                        <input 
                            type='checkbox'
                            name='canadian_bacon'
                            onChange={change}
                            checked={value.canadian_bacon}
                        />
                    </label>
                    <label>Spicy Italian Sausage
                        <input 
                            type='checkbox'
                            name='spicy_italian_sausage'
                            onChange={change}
                            checked={value.spicy_italian_sausage}
                        />
                    </label>
                    <label>Grilled Chicken
                        <input 
                            type='checkbox'
                            name='grilled_chicken'
                            onChange={change}
                            checked={value.grilled_chicken}
                        />
                    </label>
                    <label>Onions
                        <input 
                            type='checkbox'
                            name='onions'
                            onChange={change}
                            checked={value.onions}
                        />
                    </label>
                    <label>Green Pepper
                        <input 
                            type='checkbox'
                            name='green_pepper'
                            onChange={change}
                            checked={value.green_pepper}
                        />
                    </label>
                </div>
                <div className='second-column'>
                    <label>Diced Tomatos
                        <input 
                            type='checkbox'
                            name='diced_tomatos'
                            onChange={change}
                            checked={value.diced_tomatos}
                        />
                    </label>
                    <label>Black Olives
                        <input 
                            type='checkbox'
                            name='black_olives'
                            onChange={change}
                            checked={value.black_olives}
                        />
                    </label>
                    <label>Roasted Garlic 
                        <input 
                            type='checkbox'
                            name='roasted_garlic'
                            onChange={change}
                            checked={value.roasted_garlic}
                        />
                    </label>
                    <label>Artichoke Hearts
                        <input 
                            type='checkbox'
                            name='artichoke_hearts'
                            onChange={change}
                            checked={value.artichoke_hearts}
                        />
                    </label>
                    <label>Three Cheese
                        <input 
                            type='checkbox'
                            name='three_cheese'
                            onChange={change}
                            checked={value.three_cheese}
                        />
                    </label>
                    <label>Pineapple
                        <input 
                            type='checkbox'
                            name='pineapple'
                            onChange={change}
                            checked={value.pineapple}
                        />
                    </label>
                    <label>Extra Cheese
                        <input 
                            type='checkbox'
                            name='extra_cheese'
                            onChange={change}
                            checked={value.extra_cheese}
                        />
                    </label>
            </div>
        </div>
    </div>
    )
};