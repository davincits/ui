
import './style.scss';

import React, { PureComponent } from 'react';
import { classes } from '../utils';

class CheckBox extends PureComponent {
  uniqid = `${Date.now()}${Math.random()}`

  onChange = (event) => {
    const { onChange } = this.props;
    if (onChange) onChange(event.target.checked, event);
  }

  render() {
    const {
      className,
      label,
      onChange,
      value,
      id = this.uniqid,
      ...rest
    } = this.props;
    const classList = classes({
      'ui-checkbox': true,
      [className]: className,
    });
    return (
      <div className={classList}>
        <input type="checkbox" id={id} onChange={this.onChange} checked={value} {...rest} />
        <label htmlFor={id} className="ui-fake-checkbox" />
        {!!label && <label htmlFor={id} className="ui-label">{label}</label>}
      </div>
    );
  }
}

export default CheckBox;
