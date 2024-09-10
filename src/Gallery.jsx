import React from 'react';
import bg from './Assets/gallerybg.jpg'; 
import CommonBanner from './Components/CommonBanner';

const Gallery = () => {
    return (
        <div>
            <CommonBanner heading='Gallery' bg={bg}/>
        </div>
    );
};

export default Gallery;
