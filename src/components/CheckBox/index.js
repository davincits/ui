import React, { PureComponent } from 'react';
import { classes } from '../utils';

import './styles.scss';

class CheckBox extends PureComponent {
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
      ...rest
    } = this.props;
    const classList = classes({
      'ui-checkbox': true,
      [className]: className,
    });
    return (
      <div className={classList}>
        <label>
          <input type="checkbox" onChange={this.onChange} checked={value} {...rest} />
          <span className="ui-fake-checkbox" />
          {!!label && <div className="ui-label">{label}</div>}
        </label>
      </div>
    );
  }
}

export default CheckBox;
