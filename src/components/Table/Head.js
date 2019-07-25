import React from 'react';
import { classes } from '../utils';

function Head({ children, className, cellWidth }) {
  const classList = classes({
    'ui-head': true,
    [className]: className,
  });
  const style = cellWidth ? { width: `${cellWidth}%` } : { flex: 1 };
  return (<div className={classList} style={style}>{children}</div>);
}

export default Head;
