import React, { PureComponent } from 'react';
import { classes } from '../utils';

import './styles.scss';

class Radio extends PureComponent {
  onChange = (event) => {
    const { onChange } = this.props;
    const { value } = event.target;
    if (onChange) onChange(value, event);
  }

  render() {
    const {
      className,
      label,
      onChange,
      ...rest
    } = this.props;
    const classList = classes({
      'ui-radio': true,
      [className]: className,
    });
    return (
      <div className={classList}>
        <label>
          <input type="radio" onChange={this.onChange} {...rest} />
          <span className="ui-fake-radio" />
          {!!label && <div className="ui-label">{label}</div>}
        </label>
      </div>
    );
  }
}

export default Radio;
