import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedCarousel from '../components/FeaturedCarousel';

const HomeScreen = () => {

    return (
       <div className="homescreen">
           <Link to="/products" className="homescreen-banner">
               <img src="https://mtgboosters.s3.us-west-1.amazonaws.com/boostertutor2.jpg" alt=""/>
               <h2 className="homescreen-banner-center-text">SHOP BOOSTERS NOW!</h2>
           </Link>
           <FeaturedCarousel />
       </div>
    );
};

export default HomeScreen;