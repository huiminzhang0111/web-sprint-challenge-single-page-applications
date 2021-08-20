import React from 'react'

export default function Substitude() {
    return (
        <div className='substitude'>
            <h3>Choice of Substitude</h3>
            <h4>Choose up to 1</h4>
            <label>Gluten Free Crust (+$1.00)
                <input 
                    type='checkbox'
                    name='substitude'
                />
            </label>
        </div>
    )
}