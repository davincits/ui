import React from 'react';
import { classes } from '../utils';

function Head({
  children,
  className,
  cellWidth,
  width,
  align = 'left',
  style = {},
  ...props
}) {
  const classList = classes([`ui-table-head ui-table-head-align-${align}`, className]);
  if (width || cellWidth) {
    style.width = `${width || cellWidth}%`;
  } else {
    style.flex = 1;
  }
  return (<div className={classList} style={style} {...props}>{children}</div>);
}

export default Head;
