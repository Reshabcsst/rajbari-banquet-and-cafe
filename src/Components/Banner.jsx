import React from 'react';
import bg from '../Assets/image.png';
import scroll from '../Assets/scroll.gif';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className='home'>
            <img className='img' src={bg} alt="bg" />
            <div className="in container">
                <h1>Spacious Hall</h1>
                <h2> To Host Your All Events</h2>
                <button onClick={() => { navigate('/contact'); }}>Book Now</button>
            </div>
            <img className='scroll' src={scroll} alt="scroll" />
        </div>
    );
};

export default Banner;
