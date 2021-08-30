import React from 'react';
import pizzaSlice from '../images/pizzaSlic.svg';

const NavBar = (props) => {
    return(
        <div className="navbar_container">
            <div className="first_pizza">
                Pizza
            </div>
            <div className="second_menu">
                <p onClick={() => props.setIsActive(true)} className="menu_text">Menu</p>
                <div onClick={() => props.setIsActive(true)} className="pizza_image">
                    <img alt="pizza slice" className="pizza_slice" src={pizzaSlice}/>
                </div>
            </div>
        </div>
    );
};

export default NavBar;