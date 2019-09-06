import React, { PureComponent } from 'react';
import { classes } from '../utils';

import './style.scss';

class Tooltip extends PureComponent {
  componentDidMount() {
    const { checkPosition } = this.props;
    const { tooltip } = this.refs;
    if (!checkPosition) return null;
    const bounding = tooltip.getBoundingClientRect();
    const leftOver = window.innerWidth - bounding.right;
    const rightOver = bounding.left;
    if (leftOver < 0) tooltip.style.marginLeft = `${leftOver}px`;
    if (rightOver < 0) tooltip.style.marginLeft = `${-rightOver}px`;
  }

  render() {
    const { children, className } = this.props;
    return (
      <div className={classes(['ui-tooltip', className])}>
        <div className="ui-tooltip-content" ref="tooltip">{children}</div>
      </div>
    );
  }
}

export default Tooltip;
