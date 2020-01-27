
import './style.scss';

import React, { PureComponent } from 'react';
import {
  bool, string, func, element, oneOfType,
} from 'prop-types';
import { classes } from '../utils';

class CheckBox extends PureComponent {
  onChange = () => {
    const {
      value, name, disabled, onChange,
    } = this.props;
    if (onChange && !disabled) onChange(!value, name);
  }

  render() {
    const {
      className,
      label,
      children,
      onChange,
      value = false,
      error,
      disabled,
      ...rest
    } = this.props;
    return (
      <div
        className={classes([
          'ui-component ui-checkbox',
          value && 'ui-checkbox-checked',
          error && 'ui-with-error',
          disabled && 'ui-disabled',
          className
        ])}
        onClick={this.onChange}
      >
        <input type="checkbox" onChange={this.onChange} checked={value} disabled={disabled} {...rest} />
        <div className="ui-fake-checkbox" />
        {label ? (<div className="ui-label">{children}</div>) : null}
        {children}
      </div>
    );
  }
}

CheckBox.propTypes = {
  label: oneOfType([string, element]),
  value: bool,
  onChange: func,
};

export default CheckBox;
