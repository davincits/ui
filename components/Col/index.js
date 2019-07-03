import React from 'react';
import { classes } from '../utils';

import './styles.scss';

function Col({ className, children, width }) {
  const style = {};
  const classList = classes({
    'ui-column': true,
    [className]: className,
  });
  if (width) style.width = `${width}%`;
  else style.flex = 1;
  return (
    <div className={classList} style={style}>{children}</div>
  );
}

export default Col;
