import "./style.scss";

import React, { PureComponent } from "react";
import DropDown from "../DropDown";
import IconCalendar from "../icons/Calendar";
import { classes } from "../utils";
import Content, { DAYS_VIEW, MONTHES_VIEW, YEARS_VIEW } from "./Content";

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
      if (start > date) {
        onChange([date, start]);
      } else {
        onChange([start, date]);
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
      isMonthAllowed = () => true,
      isYearAllowed = () => true,
      monthNames,
      dayNames,
      range,
      calendarClassName,
      disabled,
      view,
      inline = false,
      alignRight,
      withoutDate,
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
          inline={inline}
          alignRight={alignRight}
          className={calendarClassName}
          autoWidth
          name="ui-datepicker">
          <Content
            startDate={startDate}
            endDate={endDate}
            onChange={this.onChange}
            isDateAllowed={isDateAllowed}
            isMonthAllowed={isMonthAllowed}
            isYearAllowed={isYearAllowed}
            monthNames={monthNames}
            dayNames={dayNames}
            range={range}
            withoutDate={withoutDate}
            view={withoutDate ? MONTHES_VIEW : view} />
        </DropDown>
      </div>
    );
  }
}

Datepicker.DAYS_VIEW = DAYS_VIEW;
Datepicker.MONTHES_VIEW = MONTHES_VIEW;
Datepicker.YEARS_VIEW = YEARS_VIEW;

export default Datepicker;
