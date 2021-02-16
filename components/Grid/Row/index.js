import "./style.scss";

import React from "react";
import { classes } from "../../utils";

function Row({
  className,
  children,
  gutter,
  ...props
}) {
  const classList = classes({
    "ui-component ui-row": true,
    "ui-row-gutter": gutter === true,
    [`ui-row-gutter-${gutter}`]: typeof gutter === "string",
    [className]: className,
  });
  return (
    <div className={classList} {...props}>{children}</div>
  );
}

export default Row;
