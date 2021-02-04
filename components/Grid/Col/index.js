import "./style.scss";

import React from "react";
import { classes } from "../../utils";

const REGEXP = /^[.\d]+$/;

function Col({
  className,
  children,
  width,
  auto,
  style = {},
  ...props
}) {
  if (width) {
    style.width = REGEXP.test(width) ? `${String(width)}%` : width;
  } else if (auto) {
    style.width = "auto";
  } else {
    style.flex = 1;
  }
  return (
    <div className={classes(["ui-component ui-column", className])} style={style} {...props}>{children}</div>
  );
}

export default Col;
