import React from 'react';
import FoodCard from './FoodCard';
import dessert1 from '../images/dessert1.jpg';
import dessert2 from '../images/dessert2.jpg';
import dessert3 from '../images/dessert3.jpg';

const Desserts = () =>{
    return (
        <div className="desserts_menu_container">
            <div className="favourite_text">Sweets Treats For You</div>
            <div className="items">
                <FoodCard image={dessert1} name={'Vanilla Rolls'} description={'Vanilla cream rolled with extra juicy berries'} price={11.99} />
                <FoodCard image={dessert2} name={'Baked Heart'} description={'finely baked bread with juicy filled strawberry fruits'} price={9.99} />
                <FoodCard image={dessert3} name={'Browny Bunch'} description={'Double fudge brownie topped with extra chocolate pieces'} price={9.99} />
            </div>
        </div>
    );
};

export default Desserts;
