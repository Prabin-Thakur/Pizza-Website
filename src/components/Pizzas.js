import React from 'react';
import FoodCard from './FoodCard';
import pizza2 from '../images/pizza2.jpg'
import pizza3 from '../images/pizza5.jpg'
import pizza4 from '../images/pizza4.jpg'

const Pizzas = () =>{
    return (
        <div className="pizzas_menu_container">
            <div className="favourite_text">Choose Your Favourite</div>
            <div className="items">
                <FoodCard image={pizza2} name={'Supreme Pizza'} description={'Marinara sauce, basil, italian cheese, roma tomatoes, olives and pesto'} price={14.99} />
                <FoodCard image={pizza3} name={'Hawaiian Paradise'} description={'Marinara sauce, basil, hawaiin cheese and veggie, roma tomatoes, olives and pesto'} price={16.99} />
                <FoodCard image={pizza4} name={'Taco Overload'} description={'Marinara sauce, basil, italian taco, roma tomatoes, olives and pesto'} price={15.99} />
            </div>
        </div>
    );
};

export default Pizzas;
