import React from 'react';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import DigitalPartner from '../Components/DigitalPartner';
import CEOSection from '../Components/CEOSection';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <DigitalPartner />
            <CEOSection/>
        </div>
    );
};

export default Home;
