import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="A chef posing for the camera" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"/>
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="A quote from the chef" />
          <p className="p__opensans">A great chef is an artist that I truly respect</p>
        </div>
        <p className="p__opensans">I've been a cook all my life, but I am still learning to be a good chef. I'm always learning new techniques and improving beyond my own knowledge because there is always something new to learn and new horizons to discover. A chef is a mixture maybe of artistry and craft.</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef and Founder</p>
        <img src={images.sign} alt="signature of the chef" />
      </div>
    </div>
  </div>
);

export default Chef;
