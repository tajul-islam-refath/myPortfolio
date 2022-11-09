import "./skills.scss";
import React from "react";

const Skills = () => {
  return (
    <section className="skills">
      <div className="skills__group">
        <h1 className="title">Expertise</h1>
        <div className="prograss">
          <div className="flex justify-between">
            <span className="name">Javascript</span>
            <span className="rateing">4/5</span>
          </div>
          <div className="prograss__container">
            <div
              className="prograss__bar"
              style={{ width: `${4 * 20}%` }}></div>
          </div>
        </div>
        <div className="prograss">
          <div className="flex justify-between">
            <span className="name">React</span>
            <span className="rateing">4/5</span>
          </div>
          <div className="prograss__container">
            <div
              className="prograss__bar"
              style={{ width: `${4 * 20}%` }}></div>
          </div>
        </div>
        <div className="prograss">
          <div className="flex justify-between">
            <span className="name">Redux</span>
            <span className="rateing">4/5</span>
          </div>
          <div className="prograss__container">
            <div
              className="prograss__bar"
              style={{ width: `${4 * 20}%` }}></div>
          </div>
        </div>
        <div className="prograss">
          <div className="flex justify-between">
            <span className="name">Scss</span>
            <span className="rateing">3/5</span>
          </div>
          <div className="prograss__container">
            <div
              className="prograss__bar"
              style={{ width: `${3 * 20}%` }}></div>
          </div>
        </div>
      </div>

      <div className="skills__group">
        <h1 className="title">Comfortable</h1>
        <div className="prograss">
          <div className="flex justify-between">
            <span className="name">Nodejs</span>
            <span className="rateing">3/5</span>
          </div>
          <div className="prograss__container">
            <div
              className="prograss__bar"
              style={{ width: `${3 * 20}%` }}></div>
          </div>
        </div>
        <div className="prograss">
          <div className="flex justify-between">
            <span className="name">ExpressJs</span>
            <span className="rateing">4/5</span>
          </div>
          <div className="prograss__container">
            <div
              className="prograss__bar"
              style={{ width: `${4 * 20}%` }}></div>
          </div>
        </div>
        <div className="prograss">
          <div className="flex justify-between">
            <span className="name">MongoDB</span>
            <span className="rateing">3/5</span>
          </div>
          <div className="prograss__container">
            <div
              className="prograss__bar"
              style={{ width: `${3 * 20}%` }}></div>
          </div>
        </div>
        <div className="prograss">
          <div className="flex justify-between">
            <span className="name">Angular</span>
            <span className="rateing">3/5</span>
          </div>
          <div className="prograss__container">
            <div
              className="prograss__bar"
              style={{ width: `${3 * 20}%` }}></div>
          </div>
        </div>
      </div>

      <div className="skills__group">
        <h1 className="title">Tools</h1>
        <div className="prograss">
          <div className="flex justify-between">
            <span className="name">Git</span>
            <span className="rateing">4/5</span>
          </div>
          <div className="prograss__container">
            <div
              className="prograss__bar"
              style={{ width: `${4 * 20}%` }}></div>
          </div>
        </div>
        <div className="prograss">
          <div className="flex justify-between">
            <span className="name">GitHub</span>
            <span className="rateing">4/5</span>
          </div>
          <div className="prograss__container">
            <div
              className="prograss__bar"
              style={{ width: `${4 * 20}%` }}></div>
          </div>
        </div>
        <div className="prograss">
          <div className="flex justify-between">
            <span className="name">Crome Dev Tool</span>
            <span className="rateing">4/5</span>
          </div>
          <div className="prograss__container">
            <div
              className="prograss__bar"
              style={{ width: `${4 * 20}%` }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
