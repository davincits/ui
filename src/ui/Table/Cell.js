import React from 'react';
import { classes } from '../utils';

function Cell({
  children,
  className,
  cellWidth,
  width,
}) {
  const classList = classes({
    'ui-cell': true,
    [className]: className,
  });
  const style = (width || cellWidth) ? { width: `${width || cellWidth}%` } : { flex: 1 };
  return (<div className={classList} style={style}>{children}</div>);
}

export default Cell;
