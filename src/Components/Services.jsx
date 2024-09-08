import React from 'react';
import Heading from './Heading';
import ServicesData from '../DemoData/ServicesData';

const Services = () => {
    return (
        <div className='services container'>
            <Heading title='Our Services' />
            <div className="service">
                {ServicesData.map((data, index) => {
                    return (
                        <div className='box' key={index}>
                            <div className="icon">
                                {data.img}
                            </div>
                            <div className="dt">
                                <h2>{data.name}</h2>
                                <p>{data.details}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Services;
