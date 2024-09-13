import React from 'react';
import bg from '../Assets/contact.jpg';
import CommonBanner from '../Components/CommonBanner';
import ContactForm from '../Components/ContactForm';

const Contact = () => {
    return (
        <div>
            <CommonBanner heading="Contact Us" bg={bg} />
            <ContactForm/>
        </div>
    );
};

export default Contact;
