import React from 'react';

export default function Sauce(props) {
    const { change, value } = props;
    return (
        <div className='sauce'>
                <h3>Choice of Sauce</h3>
                <h4>Required</h4>
                <label>Original Red
                    <input
                        type='radio'
                        name='sauce'
                        value='original red'
                        onChange={change}
                        checked={value.sauce === "original red"}
                    />
                </label>
                <label>Garlic Ranch
                    <input
                        type='radio'
                        name='sauce'
                        value='garlic ranch'
                        onChange={change}
                        checked={value.sauce === "garlic ranch"}
                    />
                </label>
                <label>BBQ Sauce
                    <input
                        type='radio'
                        name='sauce'
                        value='bbq sauce'
                        onChange={change}
                        checked={value.sauce === "bbq sauce"}
                    />
                </label>
                <label>Spinach Alfredo
                    <input
                        type='radio'
                        name='sauce'
                        value='spinach alfredo'
                        onChange={change}
                        checked={value.sauce === "spinach alfredo"}
                    />
                </label>
            </div>
    )
}