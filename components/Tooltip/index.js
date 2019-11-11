import './style.scss';

import React from 'react';
import Tooltip from './Tooltip';
import { classes } from '../utils';

const TOP = 'top';
const BOTTOM = 'bottom';

function Container({
  className, tooltip, place = TOP, children,
}) {
  return (
    <div className={classes(['ui-tooltip-container', `ui-tooltip-place-${place}`, className])}>
      {children}
      {tooltip ? (
        <Tooltip checkPosition={[TOP, BOTTOM].includes(place)}>{tooltip}</Tooltip>
      ) : null}
    </div>
  );
}

export default Container;
