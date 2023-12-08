import React from "react";
import { Link } from "react-router-dom";
import "./icon.scss";

import { IconType } from "react-icons";

type IconProp = {
  icon: IconType,
  herf?: string | undefined,
};

function Icon({ icon: Icon, herf: link }: IconProp) {
  return (
    <a className="myIcon" href={link} target="_blank">
      <Icon />
    </a>
  );
}

export default Icon;
