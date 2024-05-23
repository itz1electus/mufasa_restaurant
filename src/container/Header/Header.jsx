import React from 'react';

import images from '../../constants/images';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavor" />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin: '2rem 0'}}>Gourmet lovers and connoisseurs would describe their impeccable fine dining experience as “a feast of sense” where all your senses will be awakened by seductive aroma, jazzy music, luxurious interior setting and elegant ambience. With precise attention to detail, perfect execution, and exceptional service, Mufasa's Restaurant aims for a top-notch experience.</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="welcome to restaurant" />
    </div>
  </div>
);

export default Header;