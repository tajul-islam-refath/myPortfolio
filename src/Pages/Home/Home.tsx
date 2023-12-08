import "./home.scss";
import profileImg from "../../assets/profile1.jpg";
import cv from "../../assets/tajul_islam_refath.pdf";

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
            I intend to be a part of an organization where I can constantly
            learn and develop my technical and management skills and make the
            best use of them for the growth of an organization. I look forward
            to establishing myself by adopting new technologies as well.
          </p>

          <div className="btn__cv">
            <a href={cv} download>
              Download My Cv
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
