import React from 'react';
import Heading from './Heading';

const ContactForm = () => {
  return (
    <div className="contact-page">
      <section className="contact-info">
        <div className="container">
          <div className="info-section">
            <Heading title='Contact Information' />
            <p>
              Got questions? We’re here to help! Reach out, and we’ll get back to you.
            </p>
            <ul className="contact-details">
              <li><strong>Phone:</strong> +91 94331-19893</li>
              <li><strong>Email:</strong> ashisnaskar379@gmail.com</li>
              <li><strong>Address:</strong> Kankandighi Raj Bari, West Bengal 743349</li>
              <li><strong>Hours:</strong> Mon - Fri: 5:00 PM - 10:00 PM</li>
            </ul>
          </div>
          {/* Google Map */}
          <div className="map-container">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12196.827781937272!2d88.4544525!3d21.9916946!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0249005fa487c3%3A0x7b1f6b488a67eafd!2sRajbari%20Banquet%20%26%20Cafe!5e1!3m2!1sen!2sin!4v1726326043088!5m2!1sen!2sin" width="100%" height="400" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <div className="container">
          <h2>Get In Touch</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
