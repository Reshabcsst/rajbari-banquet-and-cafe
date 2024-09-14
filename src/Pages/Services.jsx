import React from 'react';
import bg from '../Assets/Services.jpg';
import CommonBanner from '../Components/CommonBanner';
import ServicesDetails from '../Components/ServicesDetails';

const Services = () => {
    return (
        <div>
            <CommonBanner heading='Celebrate in Style at Rajbari Banquet & Cafe' bg={bg} />
            <ServicesDetails />
        </div>
    );
};

export default Services;
