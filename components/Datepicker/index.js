import "./style.scss";

import React, { PureComponent } from "react";
import DropDown from "../DropDown";
import IconCalendar from "../icons/Calendar";
import Content from "./Content";
import { classes } from "../utils";

class Datepicker extends PureComponent {
  onChange = (date) => {
    const { range, value, onChange } = this.props;
    const { dropdown } = this.refs;
    if (!onChange) return;
    if (!range) {
      onChange(date);
      return dropdown.setState({ opened: false });
    }
    const [start, end] = value;
    if (!start || end) {
      return onChange([date]);
    }
    if (!end) {
      if (start < date) {
        onChange([start, date]);
      } else {
        onChange([date, start]);
      }
      return dropdown.setState({ opened: false });
    }
  }

  render() {
    const {
      value,
      label,
      className,
      isDateAllowed = () => true,
      monthNames,
      dayNames,
      range,
      disabled,
    } = this.props;
    let startDateString = value;
    let endDateString;
    let startDate;
    let endDate;
    if (range) {
      [startDateString, endDateString] = value;
    }
    if (startDateString) {
      const parts = startDateString.split("-");
      startDate = new Date(
        parseInt(parts[0], 10),
        parseInt(parts[1], 10) - 1,
        parseInt(parts[2], 10),
      );
    }
    if (endDateString) {
      const parts = endDateString.split("-");
      endDate = new Date(
        parseInt(parts[0], 10),
        parseInt(parts[1], 10) - 1,
        parseInt(parts[2], 10),
      );
    }
    return (
      <div className={classes([
        "ui-component ui-datepicker",
        range && "ui-datepicker-range",
        disabled && "ui-disabled",
        className,
      ])}>
        <DropDown
          ref="dropdown"
          button={label || (
            <div className="ui-datepicker-icon-container">
              <IconCalendar />
            </div>
          )}
          disabled={disabled}
          inline={false}
          autoWidth
          name="ui-datepicker">
          <Content
            startDate={startDate}
            endDate={endDate}
            onChange={this.onChange}
            isDateAllowed={isDateAllowed}
            monthNames={monthNames}
            dayNames={dayNames}
            range={range} />
        </DropDown>
      </div>
    );
  }
}

export default Datepicker;
