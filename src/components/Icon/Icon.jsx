import React from "react";
import { Link } from "react-router-dom";
import "./icon.scss";
import { FiFacebook } from "react-icons/fi";

function Icon() {
  return (
    <Link className="myIcon" to="/">
      <FiFacebook />
    </Link>
  );
}

export default Icon;
