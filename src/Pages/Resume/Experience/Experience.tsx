import "./experience.scss";
import React from "react";

const Experience = () => {
  return (
    <section className="experience">
      <div className="experience__group">
        <h1 className="title">Job Experience</h1>
        <div className="list">
          <div className="list__card">
            <div className="list__card__inner">
              <div className="list__card__heading">
                <div className="list__card__title">
                  <h4 className="list-title">Front End Developer</h4>
                  <span className="list-sub-title">
                    DCL Software Team (2022 - Present){" "}
                  </span>
                </div>
                <div className="list__card__country">
                  <span>Bangladesh</span>
                </div>
              </div>
              <p className="list__card__description">
                The bangladesh economy has grown strongly over recent years,
                having transformed itself from a producer and innovation-based
                economy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
