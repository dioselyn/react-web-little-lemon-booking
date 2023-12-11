import React from 'react';
import { Navbar, Nav as Navigation, Image, Container } from 'react-bootstrap';
import logo from '../assets/Logo.png';

const Nav = () => {
  return (
    <nav>
      <Navbar collapseOnSelect className="bg-body-tertiary" expand="lg">
        <Container>
          <Navbar.Brand>
            <Image src={logo} rounded />
          </Navbar.Brand>

          <Navbar.Collapse>
            <Navigation className="me-auto">
              <Navigation.Link href="/" active={true}>
                Home
              </Navigation.Link>
              <Navigation.Link>About</Navigation.Link>
              <Navigation.Link>Menu</Navigation.Link>
              <Navigation.Link>Reservations</Navigation.Link>
              <Navigation.Link>Order Online</Navigation.Link>
              <Navigation.Link>Login</Navigation.Link>
            </Navigation>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Nav;
