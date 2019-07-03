import React from 'react';
import { classes } from '../utils';

import './styles.scss';

function Row({ className, children, gutter }) {
  const classList = classes({
    'ui-row': true,
    'ui-row-gutter': gutter === true,
    [`ui-row-gutter-${gutter}`]: typeof gutter === 'string',
    [className]: className,
  });
  return (
    <div className={classList}>{children}</div>
  );
}

export default Row;
