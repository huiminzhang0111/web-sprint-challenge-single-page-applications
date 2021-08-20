import React from 'react';

export default function Toppings() {

    return (
        <div className='form-group-checkbox'>
            <h3>Add Toppings</h3>
            <h4>Choose up to 10</h4>
            <div className='all-topping'>
                <div className='first-column'>
                    <label>Pepperoni
                        <input 
                            type='checkbox'
                            name='pepperoni'
                        />
                    </label>
                    <label>Sausage
                        <input 
                            type='checkbox'
                            name='sausage'
                        />
                    </label>
                    <label>Canadian Bacon
                        <input 
                            type='checkbox'
                            name='canadian_bacon'
                        />
                    </label>
                    <label>Spicy Italian Sausage
                        <input 
                            type='checkbox'
                            name='spicy_italian_sausage'
                        />
                    </label>
                    <label>Grilled Chicken
                        <input 
                            type='checkbox'
                            name='grilled_chicken'
                        />
                    </label>
                    <label>Onions
                        <input 
                            type='checkbox'
                            name='onions'
                        />
                    </label>
                    <label>Green Pepper
                        <input 
                            type='checkbox'
                            name='green_pepper'
                        />
                    </label>
                </div>
                <div className='second-column'>
                    <label>Diced Tomatos
                        <input 
                            type='checkbox'
                            name='diced_tomatos'
                        />
                    </label>
                    <label>Black Olives
                        <input 
                            type='checkbox'
                            name='black_olives'
                        />
                    </label>
                    <label>Roasted Garlic 
                        <input 
                            type='checkbox'
                            name='roasted_garlic'
                        />
                    </label>
                    <label>Artichoke Hearts
                        <input 
                            type='checkbox'
                            name='artichoke_hearts'
                        />
                    </label>
                    <label>Three Cheese
                        <input 
                            type='checkbox'
                            name='three_cheese'
                        />
                    </label>
                    <label>Pineapple
                        <input 
                            type='checkbox'
                            name='pineapple'
                        />
                    </label>
                    <label>Extra Cheese
                        <input 
                            type='checkbox'
                            name='extra_cheese'
                        />
                    </label>
            </div>
        </div>
    </div>
    )
};