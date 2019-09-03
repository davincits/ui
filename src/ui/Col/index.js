import './style.scss';

import React from 'react';
import { classes } from '../utils';

function Col({
  className,
  children,
  width,
  auto,
  ...props
}) {
  const style = {};
  const classList = classes({
    'ui-column': true,
    [className]: className,
  });
  if (width) style.width = `${width}%`;
  if (width) style.width = 'auto';
  else style.flex = 1;
  return (
    <div className={classList} style={style} {...props}>{children}</div>
  );
}

export default Col;
