import React, { Children, cloneElement } from "react";
import { classes } from "../utils";

function TabList({
  className,
  children,
  index,
  changeIndex,
}) {
  const classList = classes({
    "ui-component ui-tab-list": true,
    [className]: className,
  });
  let iterator = 0;
  return (
    <div className={classList}>
      {Children.map(children, (child) => {
        if (!child) return null;
        return cloneElement(child, {
          active: index === iterator,
          index: iterator++,
          changeIndex,
        });
      })}
    </div>
  );
}

export default TabList;
