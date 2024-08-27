import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const NewNavbar = () => {
  const navbarStyle = {
    position: 'fixed', // Fixes the navbar to the top
    top: 0,
    left: 0,
    width: '100%', // Ensures the navbar spans the entire width of the page
    backgroundColor: '#ffffff', // White background color
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Optional: adds a subtle shadow
    zIndex: 1000, // Ensures the navbar is above other content
  };

  const brandStyle = {
    fontSize: '1.9rem', // Adjust the font size as needed
    fontWeight: 'bold',
    color: '#000', // Black text color for the brand name
    marginRight: '0px', // Pushes the brand name to the left
  };

  const navItemStyle = {
    margin: '',
    color: '#000', // Black text color for the items
    fontWeight: 'bold',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav style={navbarStyle}>
      <div className="container d-flex justify-content-between align-items-center">
        <div style={brandStyle}>
          Pago Achiever's
        </div>
        <ul className="nav ml-auto"> {/* ml-auto pushes the nav items to the right */}
          <li className="nav-item">
            <a
              className="nav-link"
              style={navItemStyle}
              onClick={() => handleScroll('card_1')}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={navItemStyle}
              onClick={() => handleScroll('card_2')}
            >
              Why Pago
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={navItemStyle}
              onClick={() => handleScroll('card_3')}
            >
              Pago's Solution
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={navItemStyle}
              onClick={() => handleScroll('card_4')}
            >
              What Pago Can Do
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              style={navItemStyle}
              onClick={() => handleScroll('card_5')}
            >
              Pago's History
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NewNavbar;
