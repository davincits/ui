import React from "react";
import { classes } from "../utils";

function TabPanel({ className, active, children }) {
  if (!active) return null;
  const classList = classes({
    "ui-component ui-tab-panel": true,
    [className]: className,
  });
  return (
    <div className={classList}>{children}</div>
  );
}

export default TabPanel;
