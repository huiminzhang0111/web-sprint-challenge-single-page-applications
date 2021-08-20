import React from 'react';

export default function Size(props) {
    const { change, value } = props;
    return (
        <div id='size-dropdown'>
            <h3>Choice of Size</h3>
            <h4>Required</h4>
            <label>Size
                <select onChange={change}
                        velue={value.size}
                        name='size'>
                    <option value=''>Select</option>
                    <option value='small'>Small Size</option>
                    <option value='medium'>Medium Size</option>
                    <option value='Large'>Large Size</option>
                </select>
            </label>
        </div>
    )
}