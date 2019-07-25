import React from 'react';
import { classes } from '../utils';

import './styles.scss';

function TabList({
  className,
  children,
  index,
  changeIndex,
}) {
  const classList = classes({
    'ui-tab-list': true,
    [className]: className,
  });
  return (
    <div className={classList}>
      {React.Children.map(children, (child, i) => React.cloneElement(child, {
        active: index === i,
        index: i,
        changeIndex,
      }))}
    </div>
  );
}

export default TabList;
