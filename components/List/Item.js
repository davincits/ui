import './style.scss';

import React, { PureComponent } from 'react';
import { classes } from '../utils';

const Image = ({ src }) => (<div className="ui-list-item-image" style={{ backgroundImage: `url(${src})` }} />);

class Item extends PureComponent {
  onClick = (event) => {
    const { item, onClick } = this.props;
    onClick(item, event);
  }

  render() {
    const {
      className,
      item,
      ...props
    } = this.props;
    const { img, label } = item;
    return (
      <div className={classes(['ui-list-item', className])} onClick={this.onClick}>
        {img ? (<Image src={img} />) : null}
        <div className="ui-list-item-label">{label || item}</div>
      </div>
    );
  }
}


export default Item;
