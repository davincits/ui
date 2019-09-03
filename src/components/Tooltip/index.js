import './style.scss';

import React from 'react';
import Tooltip from './Tooltip';
import { classes } from '../utils';

function Container({ className, tooltip, children }) {
  const classList = classes({
    'ui-tooltip-container': true,
    [className]: className,
  });
  return (
    <div className={classList}>
      {children}
      <Tooltip>{tooltip}</Tooltip>
    </div>
  );
}

export default Container;
