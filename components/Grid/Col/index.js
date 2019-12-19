import "./style.scss";

import React from "react";
import {
  bool, number, string, oneOfType,
} from "prop-types";
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
    const _width = REGEXP.test(width) ? `${String(width)}%` : width;
    style.width = _width;
    style.minWidth = _width;
  } else if (auto) style.width = "auto";
  else style.flex = 1;
  return (
    <div className={classes(["ui-component ui-column", className])} style={style} {...props}>{children}</div>
  );
}

Col.propTypes = {
  className: string,
  width: oneOfType([number, string]),
  auto: bool,
};

export default Col;
