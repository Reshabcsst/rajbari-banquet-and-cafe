import React, { useState } from 'react';
import { GrClose } from 'react-icons/gr';
import logo from './Assets/logo.png';
import { BiMenu } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
    const [visible, setVisible] = useState(false);

    const onpress = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <div className='nav'>
                <Link to='/'><img src={logo} className={`logo1 ${!visible ? 'visible' : ''}`} alt="logo" /></Link>
                <button onClick={onpress} className='toggle-menu'>
                    {
                        visible ?
                            <GrClose />
                            :
                            <BiMenu />
                    }
                </button>
                <div className={`menu ${visible ? 'visible' : ''}`}>
                    <Link to='/' onClick={onpress}>Home</Link>
                    <Link to='/gallery' onClick={onpress}>Gallery</Link>
                    <Link to='/services' onClick={onpress}>Services</Link>
                    <Link onClick={onpress}>Contact Us</Link>
                </div>
                <Link onClick={onpress} to='/'><img src={logo} className={`logo ${visible ? 'visible' : ''}`} alt="logo" /></Link>
            </div>

            <div className="con">
                <a href='tel:+91 9433119893'>+91 94331-19893</a>
                <a href='mailto:ashisnaskar379@gmail.com'>ashisnaskar379@gmail.com</a>
            </div>
            <div className="bignav">
                <Link to='/'><img src={logo} className='logo' alt="logo" /></Link>
                <div className="bigmenu">
                    <Link to='/' onClick={onpress}>Home</Link>
                    <Link to='/gallery' onClick={onpress}>Gallery</Link>
                    <span></span>
                    <Link to='/services' onClick={onpress}>Services</Link>
                    <Link onClick={onpress}>Contact Us</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
