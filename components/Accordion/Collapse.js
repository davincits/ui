import React, { memo } from "react";
import { classNames } from "../utils";

const Collapse = memo((props) => {
  const {
    className,
    children,
    active,
    animated,
  } = props;
  if (!active && !animated) {
    return null;
  }
  return (
    <div
      className={classNames([
        "ui-component ui-accordion-collapse",
        animated && "ui-animated",
        active && "ui-active",
        className,
      ])}>
      {children}
    </div>
  );
});

export default Collapse;
