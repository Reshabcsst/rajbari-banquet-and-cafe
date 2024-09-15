import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Heading from './Heading';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });

    setErrors({
      ...errors,
      [id]: ''
    });
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) {
      newErrors.name = 'Full name is required.';
    }

    if (!formData.email) {
      newErrors.email = 'Email address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid.';
    }

    if (!formData.message) {
      newErrors.message = 'Message is required.';
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();

    if (Object.keys(formErrors).length === 0) {
      // No errors, send the email
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          formData,
          process.env.REACT_APP_USER_ID
        )
        .then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            // Reset the form after successful submission
            setFormData({ name: '', email: '', message: '' });
          },
          (error) => {
            console.log('FAILED...', error);
            alert('Failed to send the message, please try again.');
          }
        );
    } else {
      // Set validation errors
      setErrors(formErrors);
    }
  };

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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
