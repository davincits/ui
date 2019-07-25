import React from 'react';
import { classes } from '../utils';

import './styles.scss';

export default function Label({ className, children }) {
  return (
    <div className={classes({ 'ui-paper': true, [className]: className })}>{children}</div>
  );
}
