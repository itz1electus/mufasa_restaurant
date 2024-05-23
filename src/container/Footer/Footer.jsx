import React from 'react';

import { FiTwitter, FiFacebook, FiInstagram } from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const date = new Date();
let year = date.getFullYear();

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Konrad-Zuse-Ring 21, 14469, Potsdam</p>
        <p className="p__opensans">+49 190 78605253</p>
        <p className="p__opensans">+49 290 16072001</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.mufasa} alt="restaurant logo" />
        <p className="p__opensans">"The best way to find yourself is to lose yourself in the service of others.</p>
        <img src={images.spoon} alt="spoon_golden" className="spoon__img" style={{ marginTop: '15px' }}/> 
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
      <div className="app__footer-links_work">
      <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday – Friday:</p>
        <p className="p__opensans">10:00 to 02:00</p>
        <p className="p__opensans">Satday – Sunday:</p>
        <p className="p__opensans">10:00 to 02:00</p>
      </div>
    </div>
    <div className="footer__copyright">
        <p className="p__opensans">&copy; {year} Mufasa. All Rights Reserved.</p>
      </div>
  </div>
);

export default Footer;