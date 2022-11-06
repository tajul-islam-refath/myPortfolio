import "./home.scss";
import React from "react";
import profileImg from "../../assets/profile1.jpg";

const Home = () => {
  return (
    <div className="home">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="home__myImage">
          <img src={profileImg} alt="Profile Image" />
        </div>
        <div className="home__mYself">
          <h6 className="subtitle">WELCOME TO MY WORLD</h6>
          <h1 className="title">
            Hi, I'm <span>Tajul Islam Refath</span>
            <br />A Software Developer
          </h1>
          <p className="short-title">
            I use animation as a third dimension by which to simplify
            experiences and kuiding thro each and every interaction. I’m not
            adding motion just to spruce things up, but doing it in ways that.
          </p>

          <div className="btn__cv">Download My Cv</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
