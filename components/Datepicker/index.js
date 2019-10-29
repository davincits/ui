import './style.scss';

import React, { PureComponent } from 'react';
import TextField from '../TextField';
import DropDown from '../DropDown';
import IconCalendar from '../icons/Calendar';
import Content from './Content';
import { classes } from '../utils';

class Datepicker extends PureComponent {
  onChange = (date) => {
    const { onChange } = this.props;
    const { dropdown } = this.refs;
    if (onChange) onChange(date);
    dropdown.setState({ opened: false });
  }

  render() {
    const {
      value,
      label,
      className,
      onChange,
      isDateAllowed,
    } = this.props;
    const dateObject = value ? new Date(value) : new Date();
    return (
      <div className={classes(['ui-datepicker', className])}>
        <DropDown
          ref="dropdown"
          button={label || (
            <div className="ui-datepicker-icon-container">
              <IconCalendar />
            </div>
          )}
          inline={false}
          name="ui-datepicker"
        >
          <Content
            dateObject={dateObject}
            onChange={this.onChange}
            isDateAllowed={isDateAllowed}
          />
        </DropDown>
      </div>
    );
  }
}

export default Datepicker;
