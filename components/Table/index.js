import './style.scss';

import React, { Children, cloneElement } from 'react';
import Row from './Row';
import Head from './Head';
import Cell from './Cell';
import { classes } from '../utils';

function Table({
  children,
  className,
  cellsWidth,
  ...props
}) {
  const classList = classes({
    'ui-component ui-table': true,
    [className]: className,
  });
  if (cellsWidth) {
    return (
      <div className={classList} {...props}>
        {Children.map(children, child => child && cloneElement(child, { cellsWidth }))}
      </div>
    );
  }
  return (<div className={classList} {...props}>{children}</div>);
}

Table.Head = Head;
Table.Row = Row;
Table.Cell = Cell;

export default Table;

export {
  Row,
  Head,
  Cell,
};
