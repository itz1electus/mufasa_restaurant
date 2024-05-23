import React from 'react';

import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.M} alt="Initial of the brand"/>
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="goldenspoon" className="spoon__img"/>
        <p className="p__opensans">Served everday since 2019. Mufasa's opened on Star Wars Day 2019. Chef / Owner Kevin Luo began baking pies and selling them to restaurants and his neighbors out of a small kitchen at Alexander Platz in Berlin. Today, Berlin's beloved restaurant and pie shop celebrates 5 years of classic, high-class fine dining.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="sharp knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="goldenspoon" className="spoon__img"/>
        <p className="p__opensans">The authentic taste comes from family recipes and from fresh, simple and tasteful ingredients straight from home. In every taco from Mufasa's Restaurant there is a bit of true German culture and flavor.</p>
        <button type="button" className="custom__button">Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
