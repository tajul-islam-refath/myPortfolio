import "./education.scss";
import React from "react";

const Education = () => {
  return (
    <section className="education">
      <div className="education__group">
        <h1 className="title">Education</h1>
        <div className="list">
          <div className="list__card">
            <div className="list__card__inner">
              <div className="list__card__heading">
                <div className="list__card__title">
                  <h4 className="list-title">BSC</h4>
                  <span className="list-sub-title">
                    Daffodil International University (2019 - Present){" "}
                  </span>
                </div>
                {/* <div className="list__card__country">
                  <span>4.89/5</span>
                </div> */}
              </div>
              <p className="list__card__description">
                Currently I am a student under department of computing and
                information systems at daffodil International university.
              </p>
            </div>
          </div>
          <div className="list__card">
            <div className="list__card__inner">
              <div className="list__card__heading">
                <div className="list__card__title">
                  <h4 className="list-title">HSC</h4>
                  <span className="list-sub-title">
                    Cumilla Residential School & College (2018){" "}
                  </span>
                </div>
                {/* <div className="list__card__country">
                  <span>4.89/5</span>
                </div> */}
              </div>
              <p className="list__card__description">
                Comilla Residential School is an educational establishment that
                is located at Laksam road Elahipur Comilla Sadar Dakshin
                Comilla.
              </p>
            </div>
          </div>
          <div className="list__card">
            <div className="list__card__inner">
              <div className="list__card__heading">
                <div className="list__card__title">
                  <h4 className="list-title">SSC</h4>
                  <span className="list-sub-title">
                    IBN Taimiya School & College Comilla (2015){" "}
                  </span>
                </div>
                <div className="list__card__country">
                  <span>4.89/5</span>
                </div>
              </div>
              <p className="list__card__description">
                Ibn Taimiya School and College is a kindergarten through twelfth
                grade school in the Tomsom Bridge area of Comilla, Bangladesh.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
