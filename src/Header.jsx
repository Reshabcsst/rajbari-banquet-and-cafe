import React, { useState } from 'react'
import { GrClose } from 'react-icons/gr';
import logo from './Assets/logo.png';
import { PiCoffee } from 'react-icons/pi';
import { BiMenu } from 'react-icons/bi';

const Header = () => {
    const [visible, setVisible] = useState(false);

    const onpress = () => {
        setVisible(!visible);
    };

    return (
        <div>
            <div className='nav'>
                <button onClick={onpress} className='toggle-menu'>
                    {
                        visible ?
                            <GrClose />
                            :
                            <BiMenu />
                    }
                </button>
                <div className={`menu ${visible ? 'visible' : ''}`}>
                    <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Contact</a>
                </div>
            </div>


            <div className="bignav">
                <img src={logo} className='logo' alt="logo" />
                <div className="bigmenu">
                    <a href="">Home</a>
                    <a href="">About</a>
                    <span></span>
                    <a href="">Services</a>
                    <a href="">Contact</a>
                </div>
            </div>
        </div>

    )
}

export default Header
