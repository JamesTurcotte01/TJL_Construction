import React from 'react';
import './Cards.css';
import CardItem from './CardItem';



function Memory() {
    
    return (
        <div className='cards'>
            <h1>In Loving Memory of:</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem
                    src='image/tommyjake.jpg'
                    text='Thomas "Tommy" Langlois - Loving Father gone from this world too soon.'
                    label='Aug 17, 1960 - Oct 10, 2010'
                    />
                    <CardItem
                    src='image/aaron.jpg'
                    text='Aaron "War-Machine" Dibella - Son and Brother to us all, who lost his life tragically on Sept 8, 2018 at the age of 21'
                    label='April 10, 1997 - Sept 8, 2018'
                    />
                </ul>
                </div>
            </div>
        </div>)



}
export default Memory;



