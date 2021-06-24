import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function About() {
    return (
        <div className='cards'>
        <h1>About Us</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <ul className='cards__items'>
                <CardItem
                src='image/jake.jpg'
                text='Jake Langlois - A decade of experience in construction and landscape services as well as License to operate Heavy Machinery.Jake has spent the last five years as a skilled operator and yard service consultant.'
                label='Owner/ Partner'
                />
                <CardItem
                src='image/tberry.jpg'
                text='Tyler Berry - Ten years of experience in the landscape service industry as well as a degree in Environmental Horticulture. Has spent the last decade maintaining the grounds at Endicott Park in Danvers Ma.'
                label='Partner'
                />
            </ul>
            </div></div></div>)
}
export default About;
