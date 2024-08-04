import React from "react";

import SubHeading from "../../components/SubHeading/SubHeading";
import "./Header.css";
import { images } from "../../constants";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new flavour" />
      <h1 className="app__header-h1">The Key To Fine Dining</h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        modi, reiciendis ullam, perferendis enim, odio ipsa maxime nemo eveniet
        distinctio ad? Deserunt earum mollitia distinctio totam iusto, aperiam
        placeat fugit?
      </p>
      <button type="button" className="custom__button">
        EXPLORE MENU
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
