import React from 'react';

const FoodCard = (props) => {
    return (
        <div className="card_container">
            <div className="card_image">
                <img className="menu_images" src={props.image} alt="pizza" />
            </div>
            <div class="menu_name">{props.name}</div>
            <div class="menu_description">{props.description}</div>
            <div class="menu_price">${props.price}</div>
            <button class="menu_button">Add to Cart</button>
        </div>
    );
};

export default FoodCard;