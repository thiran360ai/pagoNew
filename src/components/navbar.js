import React from 'react';
import { Link } from 'react-scroll'; // Only used for internal links
import { Link as RouterLink } from 'react-router-dom'; // Used for navigation to different routes

const Navbar = () => {
  const navbarStyle = {
    height: 'auto',
    padding: '0.5rem 1rem',
    backgroundColor: '#0F1E25',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const navbarBrandImgStyle = {
    width: '40px',
    height: '40px',
    marginRight: '10px',
  };

  const navbarTitleStyle = {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginLeft: '10px',
  };

  const navLinkStyle = {
    color: 'white',
    fontSize: '1rem',
    padding: '0.5rem 1rem',
    fontWeight: '500',
    cursor: 'pointer',
  };

  const navItemStyle = {
    marginLeft: '15px',
  };

  const navbarTogglerStyle = {
    padding: '0.25rem 0.5rem',
  };

  const navbarNavStyle = {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={navbarStyle}>
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img src="pago_achievers-removebg-preview.png" style={navbarBrandImgStyle} alt="Logo" />
        <span style={navbarTitleStyle}>PAGO ACHIEVERS</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={navbarTogglerStyle}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" style={navbarNavStyle}>
          <li className="nav-item" style={navItemStyle}>
            <Link
              className="nav-link"
              to="home"
              smooth={true}
              duration={500}
              style={navLinkStyle}
            >
              Home
            </Link>
          </li>
          <li className="nav-item" style={navItemStyle}>
            <Link
              className="nav-link"
              to="trainAndHire"
              smooth={true}
              duration={500}
              style={navLinkStyle}
            >
              Train and Hire
            </Link>
          </li>
          <li className="nav-item" style={navItemStyle}>
            <Link
              className="nav-link"
              to="services"
              smooth={true}
              duration={500}
              style={navLinkStyle}
            >
              Services
            </Link>
          </li>
          <li className="nav-item" style={navItemStyle}>
            <Link
              className="nav-link"
              to="aboutUs"
              smooth={true}
              duration={500}
              style={navLinkStyle}
            >
              About Us
            </Link>
          </li>
          <li className="nav-item" style={navItemStyle}>
            <Link
              className="nav-link"
              to="contactUs"
              smooth={true}
              duration={500}
              style={navLinkStyle}
            >
              Contact Us
            </Link>
          </li>
          <li className="nav-item" style={navItemStyle}>
            <RouterLink
              className="nav-link"
              to="/gallery"
              style={navLinkStyle}
            >
              Gallery
            </RouterLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
