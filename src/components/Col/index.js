import './style.scss';

import React from 'react';
import { classes } from '../utils';

function Col({
  className,
  children,
  width,
  ...props
}) {
  const style = {};
  const classList = classes({
    'ui-column': true,
    [className]: className,
  });
  if (width) style.width = `${width}%`;
  else style.flex = 1;
  return (
    <div className={classList} style={style} {...props}>{children}</div>
  );
}

export default Col;
