import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUs from './components/contactus';
import Folio from './components/Folio';
import { Element } from 'react-scroll';
import './theme.css';
import NewNavbar from './components/nav';

function App() {
  return (
    <Router>
      <NewNavbar/>
            <Folio/>
           <ContactUs/>
    </Router>
  );
}

export default App;
