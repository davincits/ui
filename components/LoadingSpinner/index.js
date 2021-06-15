import "./style.scss";

import React from "react";

function LoadingSpinner({ global }) {
  return (<div className={`ui-component ui-loading${global ? " global" : ""}`} />);
}

export default LoadingSpinner;
