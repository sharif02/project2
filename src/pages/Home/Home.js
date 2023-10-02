import React from 'react';
import Navigation from '../Navigation/Navigation';
import Sliders from '../Sliders/Sliders';
import Doners from '../Doner/Doners';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Sliders></Sliders>
            <Doners></Doners>
        </div>
    );
};

export default Home;