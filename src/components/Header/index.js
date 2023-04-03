import React from 'react';

import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import './index.scss';

const Header = () => {
  return (
    <Navbar fixed="top" expand="lg" id="site-header">
      <Container className="nav-container">
        <Navbar.Toggle aria-controls="site-header" />
        <Navbar.Collapse className="nav-links">
          <div className="nav-links-container">
            <Nav className="nav-column">
              <Navbar.Brand href="/">
                <Image src="./images/jbp.png" className="nav-logo" />
              </Navbar.Brand>
              <Nav.Link href="portrait">portrait</Nav.Link>
              <Nav.Link href="product">product</Nav.Link>
              <Nav.Link href="people-product">people + product</Nav.Link>
              <Nav.Link href="influencer">influencer</Nav.Link>
              <Nav.Link href="couple">couple</Nav.Link>
              <Nav.Link href="wedding">wedding</Nav.Link>
              <Nav.Link href="event">event</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
