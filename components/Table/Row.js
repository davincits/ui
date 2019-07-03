import React from 'react';
import { classes } from '../utils';

function Row({ children, className, cellsWidth }) {
  const classList = classes({
    'ui-row': true,
    [className]: className,
  });
  if (cellsWidth) {
    return (
      <div className={classList}>
        {React.Children.map(children, (child, i) => React.cloneElement(child, { cellWidth: cellsWidth[i] }))}
      </div>
    );
  }
  return (<div className={classList}>{children}</div>);
}

export default Row;
