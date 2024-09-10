import React, { useState } from 'react'
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
                    <Link to='/'>Home</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link>Services</Link>
                    <Link>Contact Us</Link>
                </div>
                <Link to='/'><img src={logo} className={`logo ${visible ? 'visible' : ''}`} alt="logo" /></Link>
            </div>


            <div className="bignav">
                <Link to='/'><img src={logo} className='logo' alt="logo" /></Link>
                <div className="bigmenu">
                    <Link to='/'>Home</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <span></span>
                    <Link>Services</Link>
                    <Link>Contact Us</Link>
                </div>
            </div>
        </div>

    )
}

export default Header
