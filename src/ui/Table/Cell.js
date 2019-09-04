import React from 'react';
import { classes } from '../utils';

function Cell({
  children,
  className,
  cellWidth,
  width,
  style = {},
  align = 'left',
  ...props
}) {
  const classList = classes([`ui-cell ui-cell-align-${align}`, className]);
  if (width || cellWidth) {
    style.width = `${width || cellWidth}%`;
  } else {
    style.flex = 1;
  }
  return (<div className={classList} style={style} {...props}>{children}</div>);
}

export default Cell;
