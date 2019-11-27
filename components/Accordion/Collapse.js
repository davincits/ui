import React from 'react';
import { classes } from '../utils';

function Collapse({
  className,
  children,
  active,
  animated,
}) {
  return (active || animated) ? (
    <div className={
      classes([
        'ui-accordion-collapse',
        animated && 'ui-animated',
        active && 'ui-active',
        className,
      ])
    }
    >
      {children}
    </div>
  ) : null;
}

export default Collapse;
