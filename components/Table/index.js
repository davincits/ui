import './style.scss';

import React, { Children } from 'react';
import Row from './Row';
import Head from './Head';
import Cell from './Cell';
import { classes } from '../utils';

function Table({ children, className, cellsWidth, ...props }) {
  const classList = classes({
    'ui-table': true,
    [className]: className,
  });
  if (cellsWidth) {
    return (
      <div className={classList} {...props}>
        {Children.map(children, child => React.cloneElement(child, { cellsWidth }))}
      </div>
    );
  }
  return (<div className={classList} {...props}>{children}</div>);
}

export default Table;

export {
  Row,
  Head,
  Cell,
};
