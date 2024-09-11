import React from 'react';
import bg from './Assets/gallerybg.jpg';
import CommonBanner from './Components/CommonBanner';
import GalleryImages from './Components/GalleryImages';

const Gallery = () => {
    return (
        <div>
            <CommonBanner heading='Gallery' bg={bg} />
            <GalleryImages />
        </div>
    );
};

export default Gallery;
