import React from 'react';

export default function Instructions() {
    return (
        <div id='special-text'>
            <h3>Special Instructions</h3>
            <label>Anything else you want to add? &nbsp;
                <input 
                    type='text'
                    name='instruction'
                />
            </label>
        </div>
    )
}