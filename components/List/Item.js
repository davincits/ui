import './style.scss';

import React from 'react';
import { classes } from '../utils';

const Image = ({ src }) => (<div className="ui-list-item-image" style={{ backgroundImage: `url(${src})`}} />);

function List({
  className,
  children,
  item: {
    id,
    imgSrc,
    label,
  },
  onClick,
  ...props
}) {
  return (
    <div className={classes(['ui-list-item', className])} onClick={onClick} {...props}>
      {children}
      {!children && imgSrc && (<Image src={imgSrc} />)}
      {!children && label && (<div className="ui-list-item-label">{label}</div>)}
    </div>
  );
}


export default List;
