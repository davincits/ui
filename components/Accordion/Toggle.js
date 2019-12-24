import React, { PureComponent } from 'react';
import { classes } from '../utils';

class Toggle extends PureComponent {
  onClick = (event) => {
    const {
      index, disabled, onChangeIndex, onClick,
    } = this.props;
    if (disabled) return;
    if (onChangeIndex) onChangeIndex(index);
    if (onClick) onClick(event);
  }

  render() {
    const {
      className,
      children,
      active,
      disabled,
    } = this.props;
    return (
      <div
        className={classes([
          'ui-component ui-accordion-toggle',
          active && 'ui-active',
          disabled && 'ui-disabled',
          className,
        ])}
        onClick={this.onClick}
      >
        {children}
      </div>
    );
  }
}

export default Toggle;
