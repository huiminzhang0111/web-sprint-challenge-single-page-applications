import React from 'react';

export default function Size() {
    return (
        <div className='choice'>
            <h3>Choice of Size</h3>
            <h4>Required</h4>
            <label>Size
                <select>
                    <option value=''>Select</option>
                    <option value='small'>Small Size</option>
                    <option value='medium'>Medium Size</option>
                    <option value='Large'>Large Size</option>
                </select>
            </label>
        </div>
    )
}