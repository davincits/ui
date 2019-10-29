import './style.scss';

import React, { PureComponent } from 'react';
import IconTime from '../icons/Time';
import DropDown from '../DropDown';
import Content from './Content';
import { classes } from '../utils';

class Timepicker extends PureComponent {
  onChange = (time) => {
    const { onChange } = this.props;
    const { dropdown } = this.refs;
    if (onChange) onChange(time);
    dropdown.setState({ opened: false });
  }

  render() {
    const {
      value,
      label,
      className,
    } = this.props;
    return (
      <div className={classes(['ui-timepicker', className])}>
        <DropDown
          ref="dropdown"
          button={label || (
            <div className="ui-timepicker-icon-container">
              <IconTime />
            </div>
          )}
          inline={false}
          name="ui-timepicker"
        >
          <Content
            value={value}
            onChange={this.onChange}
          />
        </DropDown>
      </div>
    );
  }
}

export default Timepicker;
