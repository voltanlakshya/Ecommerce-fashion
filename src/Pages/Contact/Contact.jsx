import React, { useState } from 'react'
import './Contact.css'
import { useDispatch } from 'react-redux';
function Contact() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_CONTACT_FORM', formData });
    alert("Thank you for your message. We'll get back to you soon!");
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>#Let's Talk</h1>
        <p>Leave a message. We'd love to hear from you!</p>
      </div>

      <div className="contact-wrapper">
        <div className="contact-details">
          <div className="contact-info-box">
            <i className="fas fa-map-marker-alt"></i>
            <div>
              <h3>Visit Our Office</h3>
              <p>123 Fashion Street, Designer City, Style 54321</p>
            </div>
          </div>

          <div className="contact-info-box">
            <i className="fas fa-envelope"></i>
            <div>
              <h3>Email Us</h3>
              <p>contact@fashionecommerce.com</p>
            </div>
          </div>

          <div className="contact-info-box">
            <i className="fas fa-phone-alt"></i>
            <div>
              <h3>Call Us</h3>
              <p>+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="contact-info-box">
            <i className="far fa-clock"></i>
            <div>
              <h3>Opening Hours</h3>
              <p>Monday to Saturday: 9:00 AM - 6:00 PM</p>
            </div>
          </div>

          <div className="contact-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1663180385066!5m2!1sen!2suk" 
              width="100%" 
              height="250" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            ></iframe>
          </div>
        </div>

        <div className="contact-form-section">
          <h2>Send Us A Message</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="Login-input"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="Login-input"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="Login-input"
              required
            />
            <textarea
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="Login-input contact-textarea"
              required
            ></textarea>
            <button type="submit" className="Login-button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact