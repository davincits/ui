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
  const classList = classes([`ui-component ui-table-head ui-table-head-align-${align}`, className]);
  if (width || cellWidth) {
    style.width = `${width || cellWidth}%`; // eslint-disable-line no-param-reassign
  } else {
    style.flex = 1; // eslint-disable-line no-param-reassign
  }
  return (<div className={classList} style={style} {...props}>{children}</div>);
}

export default Head;
