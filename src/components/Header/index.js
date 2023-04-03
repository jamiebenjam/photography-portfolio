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
        <Navbar.Brand href="/">
          <Image src="./images/jbp.png" className="nav-logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="site-header" />
        <Navbar.Collapse className="nav-links">
          <Nav>
            <Nav.Link href="portrait">
              portrait<span className="nav-divider">|</span>
            </Nav.Link>
            <Nav.Link href="product">
              product<span className="nav-divider">|</span>
            </Nav.Link>
            <Nav.Link href="people-product">
              people + product<span className="nav-divider">|</span>
            </Nav.Link>
            <Nav.Link href="influencer">
              influencer<span className="nav-divider">|</span>
            </Nav.Link>
            <Nav.Link href="couple">
              couple<span className="nav-divider">|</span>
            </Nav.Link>
            <Nav.Link href="wedding">
              wedding<span className="nav-divider">|</span>
            </Nav.Link>
            <Nav.Link href="event">
              event<span className="nav-divider"></span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
