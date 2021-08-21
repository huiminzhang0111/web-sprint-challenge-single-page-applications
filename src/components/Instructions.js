import React from 'react';

export default function Instructions(props) {
    const { change, value } = props;
    return (
        <div id='special-text'>
            <h3>Special Instructions</h3>
            <label>Anything else you want to add? &nbsp;
                <input 
                    type='text'
                    name='instructions'
                    onChange={change}
                    value={value.instructions}
                />
            </label>
        </div>
    )
}