
import './style.scss';

import React, { PureComponent } from 'react';
import { bool, string, func, element, oneOfType } from 'prop-types';
import { classes } from '../utils';

class CheckBox extends PureComponent {
  onChange = () => {
    const { onChange, value } = this.props;
    if (onChange) onChange(!value);
  }

  render() {
    const {
      className,
      label,
      onChange,
      value = false,
      ...rest
    } = this.props;
    return (
      <div className={classes(['ui-checkbox', value && 'ui-checkbox-checked', className])} onClick={this.onChange}>
        <input type="checkbox" onChange={this.onChange} checked={value} {...rest} />
        <div className="ui-fake-checkbox" />
        {!!label && <div className="ui-label">{label}</div>}
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
