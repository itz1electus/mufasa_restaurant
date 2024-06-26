import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Where to find us?</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Konrad-Zuse-Ring 21, 14469, Potsdam</p>
        <p className="p__cormorant" style={{ color: '#DDCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon – Fri: 10:00 to 02:00</p>
        <p className="p__opensans">Sat – Sun: 10:00 to 02:00</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem'}}>Visit Us</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="glass with martini and ice" />
    </div>
  </div>
);

export default FindUs;