import "./header.scss";
import React from "react";
import bannerImg from "../../assets/cover.jpg";
import profileImg from "../../assets/profile.png";
import Icon from "../Icon/Icon";

const Header = () => {
  return (
    <header className="header">
      <section className="header__image">
        <img className="header__image--img" src={bannerImg} alt="Banner" />
      </section>
      <section className="header__bio grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="header__left grid grid-cols-1 md:grid-cols-2">
          <img className="header__left--image" src={profileImg} alt="" />
          <div className="header__left__content">
            <h1 className="title">Tajul Islam Refath</h1>
            <p>I am a Developer</p>
            <div className="flex space-x-4 mt-5">
              <Icon />
              <Icon />
              <Icon />
            </div>
          </div>
        </div>
        <div className="header__right grid grid-cols-1 space-y-5 md:grid-cols-2  md:space-y-0">
          <div className="header__email">
            <p>Email</p>
            <span>Tajul Islam Refath</span>
          </div>
          <div className="header__phone">
            <p>Mobile</p>
            <span>+8801988775828</span>
          </div>
          <div className="header__birthday">
            <p>Birthday</p>
            <span>23 July</span>
          </div>
          <div className="header__location">
            <p>LOCATION</p>
            <span>Dhaka Bangladesh</span>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
