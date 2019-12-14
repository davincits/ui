import './style.scss';

import React, { PureComponent } from 'react';
import CheckBox from '../CheckBox';
import { classes } from '../utils';

const Image = ({ src }) => (<div className="ui-list-item-image" style={{ backgroundImage: `url(${src})` }} />);

class Item extends PureComponent {
  onClick = (event) => {
    const { item, notActive, onClick } = this.props;
    if (onClick && !notActive) onClick(item, event);
  }

  render() {
    const {
      className,
      item,
      checkbox,
      checked,
      notActive,
    } = this.props;
    const { img, label } = item;
    return (
      <div
        className={classes([
          'ui-list-item',
          notActive && 'ui-list-item-not-active',
          className,
        ])}
        onClick={this.onClick}
      >
        {checkbox && (
          <CheckBox value={checked} />
        )}
        {img ? (<Image src={img} />) : null}
        <div className="ui-list-item-label">{label || item}</div>
      </div>
    );
  }
}

export default Item;
