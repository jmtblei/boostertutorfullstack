import React from 'react';
import FeaturedCarousel from '../components/FeaturedCarousel';

const HomeScreen = () => {

    return (
       <div className="homescreen">
           <div className="homescreen-banner">
               {/* <img src="https://mtgboosters.s3.us-west-1.amazonaws.com/boostertutor.jpg" alt=""/> */}
               <img src="https://mtgboosters.s3.us-west-1.amazonaws.com/boostertutor2.jpg" alt="" className="banner2"/>
           </div>
           <FeaturedCarousel />
       </div>
    );
};

export default HomeScreen;