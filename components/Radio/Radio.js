import './style.scss';

import React, { PureComponent } from 'react';
import { classes } from '../utils';

class Radio extends PureComponent {
  onChange = () => {
    const { onChange, value } = this.props;
    if (onChange) onChange(value);
  }

  render() {
    const {
      className,
      children,
      onChange,
      ...rest
    } = this.props;
    return (
      <div className={classes(['ui-radio', className])} onClick={this.onChange}>
        <input type="radio" onChange={this.onChange} {...rest} />
        <span className="ui-fake-radio" />
        {!!children && <div className="ui-label">{children}</div>}
      </div>
    );
  }
}

export default Radio;
