import React, { PureComponent } from 'react';
import { classes } from '../utils';

import './style.scss';

class Tooltip extends PureComponent {
  componentDidMount() {
    const { tooltip } = this.refs;
    const bounding = tooltip.getBoundingClientRect();
    const leftOver = window.innerWidth - bounding.right;
    const rightOver = bounding.left;
    if (leftOver < 0) tooltip.style.marginLeft = `${String(leftOver)}px`;
    if (rightOver < 0) tooltip.style.marginLeft = `${String(-rightOver)}px`;
  }

  render() {
    const { children, className } = this.props;
    const classList = classes({
      'ui-tooltip ui-paper': true,
      [className]: className,
    });
    return (<div className={classList} ref="tooltip">{children}</div>);
  }
}

export default Tooltip;
