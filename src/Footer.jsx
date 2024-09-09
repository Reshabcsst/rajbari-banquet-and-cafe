import React from 'react';
import logo from './Assets/logo.png';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div className=" in container">
                <div className="col">
                    <img src={logo} alt="logo" />
                    <p>Nestled in the heart of Raidighi Kankandighi, Rajbari Banquet & Cafe offers the perfect venue for your special occasions with our elegant banquet hall and a cozy cafe for everyday moments. Celebrate with us!</p>
                </div>
                <div className="col">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>Gallery</li>
                        <li>Services</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="col">
                    <h2>Social Media</h2>
                    <div className="social">
                        <Link target="_blank" to='https://www.facebook.com/people/Rajbari-Cafe-Banquet/61565093559940/?mibextid=ZbWKwL'><FaFacebookF /></Link>
                        <Link target="_blank" to='https://www.instagram.com/rajbaricafe.official/?igsh=MjF5N2dqODV3emkw'><FaInstagram /></Link>
                        <Link target="_blank" to='https://www.google.com'><FaTwitter /></Link>
                    </div>
                </div>

                <div className="copy">
                    <p>© 2024 Rajbari Banquet & Cafe. All Rights Reserved.</p>
                    <p>Developed By <a>Reshab</a></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
