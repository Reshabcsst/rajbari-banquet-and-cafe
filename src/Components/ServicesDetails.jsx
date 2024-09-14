import React from 'react';
import Heading from './Heading';
import { ReactComponent as Catering } from '../Assets/catering.svg';
import { ReactComponent as ServiceOnDeman } from '../Assets/ondemandservices.svg';
import { ReactComponent as Party } from '../Assets/party.svg';
import { ReactComponent as Pastry } from '../Assets/pastry.svg';
import { ReactComponent as Reception } from '../Assets/reception.svg';
import { ReactComponent as Meeting } from '../Assets/meeting.svg';
import { MdOutlineAirlineSeatReclineNormal } from 'react-icons/md';
import { GiCoffeeCup } from 'react-icons/gi';
import { BsMenuUp } from 'react-icons/bs';

const ServicesDetails = () => {
    return (
        <div className="services-container">
            <Heading title='Our Services' />

            <section className="banquet-section">
                <div className="image banquet-image"></div>
                <div className="content">
                    <h2>Banquet Hall</h2>
                    <p>We offer a grand space for weddings, parties, and corporate events. The ambiance is tailored to suit every special occasion, making it memorable and elegant.</p>
                    <ul>
                        <li><Reception />Wedding & Receptions</li>
                        <li><Meeting />Corporate Meetings</li>
                        <li><Party />Private Parties</li>
                    </ul>
                </div>
            </section>

            <section className="cafe-section">
                <div className="image cafe-image"></div>
                <div className="content">
                    <h2>Café Services</h2>
                    <p>Relax and unwind in our cozy café, featuring the finest gourmet coffee and fresh pastries. Ideal for casual meetings or a peaceful retreat.</p>
                    <ul>
                        <li><GiCoffeeCup />Specialty Coffee</li>
                        <li><Pastry />Handmade Pastries</li>
                        <li><MdOutlineAirlineSeatReclineNormal />Comfortable Seating</li>
                    </ul>
                </div>
            </section>

            <section className="catering-section">
                <div className="image catering-image"></div>
                <div className="content">
                    <h2>Catering</h2>
                    <p>Our top-tier catering services ensure delicious meals for your events, customized to meet your needs and preferences.</p>
                    <ul>
                        <li><BsMenuUp />Custom Menus</li>
                        <li><Catering />Event Catering</li>
                        <li><ServiceOnDeman />On-Demand Service</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ServicesDetails;
