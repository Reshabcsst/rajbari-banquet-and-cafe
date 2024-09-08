import React from 'react';
import design from '../Assets/underline.png';

const Heading = ({ title }) => {
    return (
        <h2 className='heading'>
            {title}
            <img src={design} alt="design" />
        </h2>
    );
};

export default Heading;
