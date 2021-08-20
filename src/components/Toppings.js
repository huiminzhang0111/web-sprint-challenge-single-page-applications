import React from 'react';

export default function Toppings() {

    return (
        <div className='form-group checkbox'>
            <h3>Add Toppings</h3>
            <h4>Choose up to 10</h4>
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
                name='canadian bacon'
            />
        </label>
        <label>Spicy Italian Sausage
            <input 
                type='checkbox'
                name='spicy italian sausage'
            />
        </label>
        <label>Grilled Chicken
            <input 
                type='checkbox'
                name='grilled chicken'
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
                name='green pepper'
            />
        </label>
        <label>Diced Tomatos
            <input 
                type='checkbox'
                name='diced tomatos'
            />
        </label>
        <label>Black Olives
            <input 
                type='checkbox'
                name='black olives'
            />
        </label>
        <label>Roasted Garlic 
            <input 
                type='checkbox'
                name='Pepperoni'
            />
        </label>
    </div>
    )
};