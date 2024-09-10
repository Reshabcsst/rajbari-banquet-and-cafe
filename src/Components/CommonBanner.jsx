import React from 'react';

const CommonBanner = ({ bg, heading }) => {
    return (
        <div className='common-banner' style={{ backgroundImage: `url(${bg})` }}>
            <div className="in container">
                <h1>{heading}</h1>
            </div>
        </div>
    );
};

export default CommonBanner;
