import './style.scss';

import React from 'react';
import Item from './Item';
import { classes } from '../utils';

function List({
  className,
  children,
  items,
  onClick,
  imageSize = 'medium',
  ...props
}) {
  return (
    <div className={classes(['ui-list', className, `ui-list-images-${imageSize}`])} {...props}>
      {items ? items.map((item, index) => (
        <Item key={item.id || index} item={item} onClick={onClick} />
      )) : children}
    </div>
  );
}


export default List;
