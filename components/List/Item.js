import './style.scss';

import React, { Component } from 'react';
import { classes } from '../utils';

const Image = ({ src }) => (<div className="ui-list-item-image" style={{ backgroundImage: `url(${src})`}} />);

class Item extends Component {
  onClick = () => {
    const { item, onClick } = this.props;
    if (!onClick) return;
    onClick(item);
  }

  render() {
    const {
      className,
      children,
      item: {
        img,
        label,
      },
      onClick,
      ...props
    } = this.props;
    return (
      <div className={classes(['ui-list-item', className])} onClick={this.onClick} {...props}>
        {children}
        {!children && img && (<Image src={img} />)}
        {!children && label && (<div className="ui-list-item-label">{label}</div>)}
      </div>
    );
  }
}

export default Item;
