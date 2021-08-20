import React from 'react';

export default function Sauce() {
    return (
        <div className='sauce'>
                <h3>Choice of Sauce</h3>
                <h4>Required</h4>
                <label>Original Red
                    <input
                        type='radio'
                        name='sauce'
                        value='original red'
                    />
                </label>
                <label>Garlic Ranch
                    <input
                        type='radio'
                        name='sauce'
                        value='garlic ranch'
                    />
                </label>
                <label>BBQ Sauce
                    <input
                        type='radio'
                        name='sauce'
                        value='bbq sauce'
                    />
                </label>
                <label>Spinach Alfredo
                    <input
                        type='radio'
                        name='sauce'
                        value='spinach alfredo'
                    />
                </label>
            </div>
    )
}