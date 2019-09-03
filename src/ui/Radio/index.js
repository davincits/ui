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
      label,
      onChange,
      id = this.uniqid,
      ...rest
    } = this.props;
    const classList = classes({
      'ui-radio': true,
      [className]: className,
    });
    return (
      <div className={classList}>
        <input type="radio" id={id} onChange={this.onChange} {...rest} />
        <label htmlFor={id} className="ui-fake-radio" />
        {!!label && <label htmlFor={id} className="ui-label">{label}</label>}
      </div>
    );
  }
}

export default Radio;
