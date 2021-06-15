import React, { Children, cloneElement } from "react";
import { classes } from "../utils";

function Row({
  children,
  className,
  cellsWidth,
  ...props
}) {
  const classList = classes(["ui-component ui-table-row", className]);
  if (cellsWidth) {
    return (
      <div className={classList} {...props}>
        {Children.map(children, (child, index) => child
          && cloneElement(child, { cellWidth: cellsWidth[index] }))}
      </div>
    );
  }
  return (<div className={classList} {...props}>{children}</div>);
}

export default Row;
