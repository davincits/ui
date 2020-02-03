import React, { Children, cloneElement } from 'react';
import { classes } from '../utils';

function TabList({
  className,
  children,
  index,
  changeIndex,
}) {
  const classList = classes({
    'ui-component ui-tab-list': true,
    [className]: className,
  });
  let i = 0;
  return (
    <div className={classList}>
      {Children.map(children, (child) => {
        if (!child) return null;
        return cloneElement(child, {
          active: index === i,
          index: i++,
          changeIndex,
        });
      })}
    </div>
  );
}

export default TabList;
