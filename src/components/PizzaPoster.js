import React from 'react';
import NavBar from './NavBar';


const PizzaPoster = (props) => {
    return(
        <div className="pizzas_container">
           <div className="first_container">
                <NavBar isActive={props.isActive} setIsActive={props.setIsActive} />
           </div>
           <div className="second_container">
               <div className="text">
                    <div className="greatest_container">
                        <p className="greatest_text">GREATEST<br/>PIZZA EVER</p>
                    </div>
                    <p className="ready_text">READY IN 60 SECONDS.</p>
               </div>
               <div className="button_container">
                    <button className="place_button">Place Order</button>
                </div>
           </div>
        </div>
    );
};

export default PizzaPoster;