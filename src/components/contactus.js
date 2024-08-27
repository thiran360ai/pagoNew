import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faClock, faUser, faMessage, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const ContactUs = () => {

  const sectionStyle = {
    paddingTop: '50px',
    backgroundColor: '#ffffff', // White background for the section
    padding: '3rem 0',
    borderRadius: '30px',
  };

  const overlayStyle = {
    borderRadius: '10px',
    padding: '3rem',
  };

  const cardStyle = {
    backgroundColor: '#ffffff', // White background for the card
    border: '1px solid #dee2e6', // Light border
    borderRadius: '10px',
    padding: '2rem',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem',
    color: '#333', // Dark grey text color
    fontSize: '16px', // Font size for card content
  };

  const formCardStyle = {
    ...cardStyle,
  };

  const inputGroupStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  };

  const inputIconStyle = {
    backgroundColor: '#f5f5f5', // Light grey background for the icons
    border: '1px solid #ced4da',
    borderRight: 'none',
    padding: '0.3rem',
    borderRadius: '5px 0 0 5px',
  };

  const inputStyle = {
    color: '#333',
    border: '1px solid #ced4da', // Subtle border
    padding: '0.3rem',
    borderRadius: '0 5px 5px 0',
    width: '100%',
    fontSize: '16px', // Font size for input fields
  };

  const textareaStyle = {
    ...inputStyle,
    borderRadius: '5px',
    height: '150px',
  };

  const buttonStyle = {
    backgroundColor: '#28a745', // Green color for the button
    color: 'white',
    border: 'none',
    padding: '0.3rem ',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    fontWeight: 'bold',
    fontSize: '16px', // Font size for button
    transition: 'background-color 0.3s ease',
  };

  const headingStyle = {
    color: '#333', // Dark grey color for headings
    fontWeight: 'bold',
    fontSize: '24px', // Font size for headings
    marginBottom: '1.5rem',
  };

  const textMutedStyle = {
    color: '#555', // Medium grey text color
    marginBottom: '0.5rem',
    fontSize: '19px', // Font size for muted text
  };

  return (
    <div className="container" style={sectionStyle}>
      <div style={overlayStyle}>
        <h1 style={{ textAlign: 'center', color: '#333', paddingBottom: '2rem', fontSize: '32px' }}>Contact Us</h1>
        <div className="row">
          <div className="col-lg-6">
            <div style={cardStyle}>
              <h4 style={headingStyle}>Our Location</h4>
              <p style={textMutedStyle}>
                <FontAwesomeIcon icon={faLocationDot} color="#007bff" /> DN Kannan, 16, Vandikaran St, Ramapuram, Mosque Colony, Maduvinkarai,
                Guindy, Chennai, TamilNadu-600032.
              </p>
              <p style={textMutedStyle}>
                <FontAwesomeIcon icon={faEnvelope} color="#007bff" /> pagoachievers.com
              </p>
              <p style={textMutedStyle}>
                <FontAwesomeIcon icon={faPhone} color="#007bff" /> +91 9840369759
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div style={formCardStyle}>
              <h4 style={headingStyle}>Get in Touch</h4>
              <form>
                <div style={inputGroupStyle}>
                  <span style={inputIconStyle}>
                    <FontAwesomeIcon icon={faUser} color="#007bff" />
                  </span>
                  <input type="text" style={inputStyle} placeholder="Your Name" />
                </div>
                <div style={inputGroupStyle}>
                  <span style={inputIconStyle}>
                    <FontAwesomeIcon icon={faEnvelope} color="#007bff" />
                  </span>
                  <input type="email" style={inputStyle} placeholder="Your Email" />
                </div>
                {/* <div className="form-group">
                  <textarea className="form-control" style={textareaStyle} placeholder="Your Message"></textarea>
                </div> */}
                <button
                  type="submit"
                  style={buttonStyle}
                  onMouseOver={(e) => (e.target.style.backgroundColor = '#218838')}
                  onMouseOut={(e) => (e.target.style.backgroundColor = '#28a745')}
                >
                  <FontAwesomeIcon icon={faMessage} /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
