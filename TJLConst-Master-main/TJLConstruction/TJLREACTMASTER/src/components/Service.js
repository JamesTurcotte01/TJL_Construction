import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Service() {
    return (
        <div className='cards'>
            <h1>Our Premiere Services:</h1>
            <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='image/landingsm.jpg'
              text='We will take your yard and turn it into the Oasis you have always dreamed of with our Hardscaping service! No job too big or too small, call us today! '
              label='Hardscaping'
              path='/services'
            />
            <CardItem
              src='image/patio1.jpg'
              text='Turn that tired old patio into the perfect summer spot with our wall and patio services!'
              label='Walls and Patios'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='image/curbappeal.jpg'
              text='Our professional landscaping team will transform your yard and add some serious curb appeal!'
              label='Landscaping'
              path='/services'
            />
            <CardItem
              src='image/wash2.jpg'
              text='Professional pressure washing of your deck, boat, driveway, fence! '
              label='Pressure Washing'
              path='/services'
            />
            <CardItem
              src='image/demo.jpg'
              text='Demo and remove your old unfinished projects and crumbling patios'
              label='Demolition'
              path='/services'
            />
          </ul>
        </div>
      </div>
        </div>
    )
}
export default Service;