import './style.scss';

import React from 'react';
import { classes } from '../utils';

export default ({
  children,
  className,
  iconName,
  ...rest
}) => {
  const props = {
    viewBox: '0 0 24 24',
    version: '1.1',
    xmlns: 'http://www.w3.org/2000/svg',
    xmlnsXlink: 'http://www.w3.org/1999/xlink',
    className: classes({
      'ui-svg-icon': true,
      [`ui-icon-${iconName}`]: iconName,
      [className]: className,
    }),
    ...rest,
  };
  return (<svg {...props}>{children}</svg>);
};
