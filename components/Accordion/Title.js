import React from 'react';
import IconPlus from '../icons/Plus';
import { classes } from '../utils';

function Title({ className, children }) {
  return (
    <div className={classes(['ui-accordion-title', className])}>
      <IconPlus />
      {children}
    </div>
  );
}

export default Title;
