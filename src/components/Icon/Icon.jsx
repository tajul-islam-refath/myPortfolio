import React from "react";
import { Link } from "react-router-dom";
import "./icon.scss";

import { IconType } from "react-icons";

type IconProp = {
  icon: IconType,
  herf?: string | undefined,
};

function Icon({ icon: Icon }: IconProp) {
  return (
    <Link className="myIcon" to="/">
      <Icon />
    </Link>
  );
}

export default Icon;
