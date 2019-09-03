import './style.scss';

import React from 'react';
import { classes } from '../utils';

export default function Label({ className, children }) {
  return (
    <div className={classes({ 'ui-label': true, [className]: className })}>{children}</div>
  );
}
