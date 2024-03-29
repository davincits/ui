import React from "react";
import Svg from "./Svg";

export default (props) => (
  <Svg iconName="chevron-left" {...props}>
    <path d="M8,8 16,8 16,16 15,16 15,9 8,9z" transform="translate(2 0) rotate(-135 12 12)" />
  </Svg>
);
