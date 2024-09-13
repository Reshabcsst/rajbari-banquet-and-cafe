import React from 'react';

const ContactForm = () => {
  return (
    <div className="contact-page">
      <section className="contact-info">
        <div className="container">
          <div className="info-section">
            <h2>Contact Information</h2>
            <p>
              Have any questions? Feel free to reach out, and we’ll be happy to help!
            </p>
            <ul className="contact-details">
              <li><strong>Phone:</strong> +91 94331-19893</li>
              <li><strong>Email:</strong> ashisnaskar379@gmail.com</li>
              <li><strong>Address:</strong> Kankandighi Raj Bari, State Highway, Raidighi, Kankandighi, West Bengal 743349</li>
              <li><strong>Hours:</strong> Mon - Fri: 5:00 PM - 10:00 PM</li>
            </ul>
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
