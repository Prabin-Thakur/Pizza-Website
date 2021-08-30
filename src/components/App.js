import React,{useState} from 'react';
import PizzaPoster from './PizzaPoster';
import SideBar from './SideBar';
import Pizzas from './Pizzas';
import Desserts from './Desserts';
import PizzaOfTheDay from './PizzaOfTheDay';
import Footer from './Footer';
import './App.css';

const App = ( ) => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="big_container">
            <PizzaPoster isActive={isActive} setIsActive={setIsActive} /> 
            {isActive ? <SideBar setIsActive={setIsActive} /> : null}
            <Pizzas />
            <PizzaOfTheDay />
            <Desserts />
            <Footer />
        </div>
    );
};

export default App;