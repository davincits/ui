import React from "react";
import Svg from "./Svg";

export default (props) => (
  <Svg viewBox="0 0 24 24" iconName="info" {...props}>
    <circle cx="12" cy="12" r="11" stroke="currentColor" fill="none" strokeWidth="2" />
    <line x1="12" y1="6" x2="12" y2="8" stroke="currentColor" strokeWidth="2" />
    <line x1="12" y1="10" x2="12" y2="18" stroke="currentColor" strokeWidth="2" />
  </Svg>
);
