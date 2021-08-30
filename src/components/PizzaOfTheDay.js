import React from 'react';

const PizzaOfTheDay = () => {
    return(
        <div className="DayPizza_container">
            <div className="DayPizza_text">
                Pizza  Of  The  Day
            </div>
            <div className="DayPizza_description">
                Truffle alfredo sauce topped with 24 carat gold dust.
            </div>
            <button className="DayPizza_button">Order Now</button>
        </div>
    );
};

export default PizzaOfTheDay;