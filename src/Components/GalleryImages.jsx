import React from 'react';
import images from '../DemoData/Gallery';
import img from '../Assets/comingsoon.webp';
import Heading from './Heading';

const GalleryImages = () => {
    return (
        <div className='gallery-images container'>
            <Heading title='Snapshots of Joy' />
            <div className="in">
                {images.map((data, index) => {
                    return (
                        <div className='box' key={index}>
                            <img src={data.img} alt={data.img} />
                            {/* <label className="image-label">{data.label}</label> */}
                            <img className='image-label' src={img} alt="Coming Soon!" />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default GalleryImages;
