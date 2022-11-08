import React from 'react';
import Banner from '../Banner/Banner';
import Policy from '../Policy/Policy';
import Services from '../Services/Services';
import SpecialOrder from '../SpecialOrder/SpecialOrder';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Policy></Policy>
            <SpecialOrder></SpecialOrder>

        </div>
    );
};

export default Home;