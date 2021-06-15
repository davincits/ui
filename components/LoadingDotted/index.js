import "./style.scss";

import React from "react";

function LoadingDotted({ width, height }) {
  return (
    <div
      className="ui-component ui-loading-dotted"
      style={{
        width: width ? `${width}px` : "",
        height: height ? `${height}px` : "",
      }}>
      <span />
      <span />
      <span />
    </div>
  );
}

export default LoadingDotted;
