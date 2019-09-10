import './style.scss';

import React, { PureComponent } from 'react';
import { classes } from '../utils';

class Radio extends PureComponent {
  uniqid = `${Date.now()}${Math.random()}`

  onChange = (event) => {
    const { onChange, value } = this.props;
    if (onChange && event.target.value) onChange(value, event);
  }

  render() {
    const {
      className,
      children,
      onChange,
      id = this.uniqid,
      ...rest
    } = this.props;
    const classList = classes({
      'ui-radio': true,
      [className]: className,
    });
    return (
      <label htmlFor={id} className={classList}>
        <input type="radio" id={id} onChange={this.onChange} {...rest} />
        <span className="ui-fake-radio" />
        {!!children && <div className="ui-label">{children}</div>}
      </label>
    );
  }
}

export default Radio;
