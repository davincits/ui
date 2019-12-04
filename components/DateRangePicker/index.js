import '../Datepicker/style.scss';
import './style.scss';

import React, { PureComponent } from 'react';
import DropDown from '../DropDown';
import IconCalendar from '../icons/Calendar';
import Content from '../Datepicker/Content';
import { classes } from '../utils';

class DateRangePicker extends PureComponent {
  onEndChange = (endDate) => {
    const { value: [startDate], onChange } = this.props;
    const { dropdown } = this.refs;
    if (onChange) onChange([startDate, endDate]);
    dropdown.setState({ opened: false });
  }

  onStartChange = (startDate) => {
    const { value: [, endDate], onChange } = this.props;
    if (onChange) onChange([startDate, endDate]);
  }

  render() {
    const {
      value: [startDate, endDate],
      label,
      className,
      isDateAllowed = () => true,
    } = this.props;
    let startDateObject;
    let endDateObject;
    if (startDate) {
      const parts = startDate.split('-');
      startDateObject = new Date(
        parseInt(parts[0], 10),
        parseInt(parts[1], 10) - 1,
        parseInt(parts[2], 10),
      );
    }
    if (endDate) {
      const parts = endDate.split('-');
      endDateObject = new Date(
        parseInt(parts[0], 10),
        parseInt(parts[1], 10) - 1,
        parseInt(parts[2], 10),
      );
    }
    return (
      <div className={classes(['ui-datepicker ui-date-range-picker', className])}>
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
          <div className="ui-container">
            <Content
              dateObject={startDateObject}
              onChange={this.onStartChange}
              isDateAllowed={isDateAllowed}
            />
            <Content
              dateObject={endDateObject}
              onChange={this.onEndChange}
              isDateAllowed={isDateAllowed}
            />
          </div>
        </DropDown>
      </div>
    );
  }
}

export default DateRangePicker;
