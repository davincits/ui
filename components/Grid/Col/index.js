import './style.scss';

import React from 'react';
import { bool, number, string, oneOfType } from 'prop-types';
import { classes } from '../../utils';

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
  else if (auto) style.width = 'auto';
  else style.flex = 1;
  return (
    <div className={classList} style={style} {...props}>{children}</div>
  );
}

Col.propTypes = {
  width: oneOfType([number, string]),
  auto: bool,
}

export default Col;
