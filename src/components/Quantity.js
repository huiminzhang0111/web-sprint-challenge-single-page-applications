import React, { useState } from 'react';

export default function Quantity(props) {
    const { change, value } = props;
    const [count, setCount] = useState(1)
    const inc = (event) => {setCount(count + 1)}
    let dec = (event) => {setCount(count - 1)}
    if(count<=1) {
        dec = () => setCount(1)
    }
    return (
        <div className='quantity'>
            <h4>Quantity</h4>
            <button onClick={dec}>-</button>
            <input type='number' value={count} onChange={change}/>
            <button onClick={inc}>+</button>
        </div>
    )
}