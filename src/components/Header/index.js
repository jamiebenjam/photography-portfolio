import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BsInstagram } from 'react-icons/bs';
import { MdOutlineMail } from 'react-icons/md';

import './index.scss';

const Header = () => {
  return (
    <Navbar fixed="top" expand="lg" id="site-header">
      <Container className="nav-container">
        <div className="nav-links-container">
          <Nav className="nav-column">
            <Nav.Link href="/" className="nav-logo">
              jbp
            </Nav.Link>
            <Nav.Link href="portrait">portrait</Nav.Link>
            <Nav.Link href="product">product</Nav.Link>
            <Nav.Link href="people-product">people + product</Nav.Link>
            <Nav.Link href="influencer">influencer</Nav.Link>
            <Nav.Link href="couple">couple</Nav.Link>
            <Nav.Link href="wedding">wedding</Nav.Link>
            <Nav.Link href="event">event</Nav.Link>
          </Nav>
          <div className="social-container">
            <Button variant="outline-dark" className="round-btn">
              <a href="https://www.instagram.com/jamiebenjam/">
                <BsInstagram size={12} className="social-icons" />
              </a>
            </Button>
            <Button variant="outline-dark" className="round-btn">
              <a href="mailto:jamiebenjaminphotography@gmail.com">
                <MdOutlineMail size={12} className="social-icons" />
              </a>
            </Button>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
