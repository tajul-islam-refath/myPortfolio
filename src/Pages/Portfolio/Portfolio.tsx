import "./portfolio.scss";
import React from "react";
import { Link } from "react-router-dom";

import { portfolio } from "../../data/data";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h1 className="title">My portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
        {portfolio.map((web) => (
          <div className="card">
            <div className="inner">
              <div className="inner__tham">
                <img src={web.thumbnail} alt="Web" />
              </div>
              <div className="flex flex-col md:flex-row justify-between space-y-3 md:space-y-0 my-4">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                  {web.tec.map((name, i) => (
                    <h6 className="inner--tac" key={i}>
                      {name}
                    </h6>
                  ))}
                </div>
                {/* <p className="inner--likes ">Love - {web.likes}</p> */}
              </div>
              <a href={web.git} target="_blank">
                <h1 className="inner--title ">{web.title}</h1>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
