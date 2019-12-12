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
  const classList = classes([`ui-component ui-table-cell ui-table-cell-align-${align}`, className]);
  if (width || cellWidth) {
    style.width = `${width || cellWidth}%`; // eslint-disable-line no-param-reassign
  } else {
    style.flex = 1; // eslint-disable-line no-param-reassign
  }
  return (<div className={classList} style={style} {...props}>{children}</div>);
}

export default Cell;
