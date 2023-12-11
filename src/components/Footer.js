import React from 'react';
import { Image } from 'react-bootstrap';
import logo from '../assets/Logo .svg';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <Image src={logo} />
        </div>
        <div>
          <p>Navigation</p>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Menu</a>
              </li>
              <li>
                <a href="/">Reservations</a>
              </li>
              <li>
                <a href="/">Order Online</a>
              </li>
              <li>
                <a href="/">Login</a>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <p>Contact</p>
          <ul>
            <li>Chicago, USA</li>
            <li>+55 555 555 55</li>
            <li>
              <a href="mailto: contact@littlelemon.com">
                contact@littlelemon.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p>Social Media Links</p>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
