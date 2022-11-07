import "./resume.scss";
import React, { useState } from "react";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";

const Resume = () => {
  const [tab, setTab] = useState("skills");
  return (
    <div className="resume">
      <div className="resume__tabs">
        <nav className="resume__nav">
          <ul>
            <li
              className={tab === "skills" ? "active" : ""}
              onClick={() => setTab("skills")}>
              Professional Skills
            </li>
            <li
              className={tab === "experience" ? "active" : ""}
              onClick={() => setTab("experience")}>
              Experience
            </li>
            <li
              className={tab === "education" ? "active" : ""}
              onClick={() => setTab("education")}>
              Education
            </li>
          </ul>
        </nav>
        {tab === "skills" ? (
          <Skills />
        ) : tab === "experience" ? (
          <Experience />
        ) : (
          <Education />
        )}
      </div>
    </div>
  );
};

export default Resume;
