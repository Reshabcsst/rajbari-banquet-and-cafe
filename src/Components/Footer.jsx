import React from 'react';
import logo from '../Assets/logo.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <div className='footer'>
            <div className=" in container">
                <div className="col">
                    <img src={logo} alt="logo" />
                    <p>Nestled in the heart of Raidighi Kankandighi, Rajbari Banquet & Café offers the perfect venue for your special occasions with our elegant banquet hall and a cozy cafe for everyday moments. Celebrate with us!</p>
                </div>
                <div className="col">
                    <h2>Company</h2>
                    <ul>
                        <li onClick={() => { navigate('/') }}>Home</li>
                        <li onClick={() => { navigate('/gallery') }}>Gallery</li>
                        <li onClick={() => { navigate('services') }}>Services</li>
                        <li onClick={() => { navigate('/contact') }}>Contact Us</li>
                    </ul>
                </div>

                <div className="col">
                    <h2>Get In Touch</h2>
                    <div className="social">
                        <Link target="_blank" to='https://www.facebook.com/people/Rajbari-Cafe-Banquet/61565093559940/?mibextid=ZbWKwL'><FaFacebookF /></Link>
                        <Link target="_blank" to='https://www.instagram.com/rajbaricafe.official/?igsh=MjF5N2dqODV3emkw'><FaInstagram /></Link>
                        <Link target="_blank" to='https://www.google.com'><FaTwitter /></Link>
                    </div>
                </div>

                <div className="copy">
                    <p>© 2024 Rajbari Banquet & Café. All Rights Reserved.</p>
                    <p>Developed By <a href='tel:8585891309'>Reshab</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
