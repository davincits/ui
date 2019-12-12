import React, { PureComponent } from 'react';
import { classes } from '../utils';

class Toggle extends PureComponent {
  onClick = (event) => {
    const { index, changeIndex, onClick } = this.props;
    if (changeIndex) changeIndex(index);
    if (onClick) onClick(event);
  }

  render() {
    const {
      className,
      children,
      active,
    } = this.props;
    return (
      <div
        className={classes(['ui-component ui-accordion-toggle', active && 'ui-active-state', className])}
        onClick={this.onClick}
      >
        {children}
      </div>
    );
  }
}

export default Toggle;
