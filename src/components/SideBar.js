import React from 'react';
import { Link } from 'react-scroll'

const SideBar = (props) => {
    return (
        <div className="sideBar_container">
            <div className="sideBar_first">
                <div onClick={() => props.setIsActive(false)} className="cross_image">
                    <svg id="cross" height="365.696pt" viewBox="0 0 365.696 365.696" width="365.696pt" xmlns="http://www.w3.org/2000/svg"><path d="m243.1875 182.859375 113.132812-113.132813c12.5-12.5 12.5-32.765624 0-45.246093l-15.082031-15.082031c-12.503906-12.503907-32.769531-12.503907-45.25 0l-113.128906 113.128906-113.132813-113.152344c-12.5-12.5-32.765624-12.5-45.246093 0l-15.105469 15.082031c-12.5 12.503907-12.5 32.769531 0 45.25l113.152344 113.152344-113.128906 113.128906c-12.503907 12.503907-12.503907 32.769531 0 45.25l15.082031 15.082031c12.5 12.5 32.765625 12.5 45.246093 0l113.132813-113.132812 113.128906 113.132812c12.503907 12.5 32.769531 12.5 45.25 0l15.082031-15.082031c12.5-12.503906 12.5-32.769531 0-45.25zm0 0"/></svg>
                </div>
            </div>
            <div className="sideBar_second">
                <Link to="pizzas_menu_container" smooth={true} duration={500}>
                    <div onClick={() => props.setIsActive(false)}>Pizzas</div>
                </Link>
                <Link to="desserts_menu_container" smooth={true} duration={500}>
                    <div onClick={() => props.setIsActive(false)}>Desserts</div>
                </Link>
                <Link to="pizzas_menu_container" smooth={true} duration={500}>
                    <div onClick={() => props.setIsActive(false)}>Full Menu</div>
                </Link>
            </div>
            <div className="sideBar_third">
                <button className="order_button">Order Now</button>
            </div>
        </div>
    );
};

export default SideBar;