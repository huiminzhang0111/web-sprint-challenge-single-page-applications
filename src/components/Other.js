import React from 'react';

export default function Other() {
    return (
        <div className='other-container'>
         <h3>Food Delivery in Gottham City</h3>    
            <div className='other'>

                <div className='burger'>
                    <img className='other-image' src="https://images.pexels.com/photos/1893557/pexels-photo-1893557.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt='burger image' />
                    <h3>McDonald's</h3>
                    <h4>$ - American - Fast Food - Burgers</h4>
                    <h5>20-30min</h5>
                    <h5>$5.99 Delivery Fee</h5>
                </div>
                <div className='sweetgreen'>
                    <img className='other-image' src="https://images.pexels.com/photos/4551971/pexels-photo-4551971.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt='salad image' />
                    <h3>Sweetgreen</h3>
                    <h4>$ - Healthy - Salads</h4>
                    <h5>30-45min</h5>
                    <h5>$4.99 Delivery Fee</h5>
                </div>
                <div className='coffee'>
                    <img className='other-image' src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt='coffee image' />
                    <h3>Starbucks</h3>
                    <h4>$ - Cafe - Breakfast and Brunches</h4>
                    <h5>10-20min</h5>
                    <h5>$3.99 Delivery Fee</h5>
                </div>

            </div>
        </div>
    )
}