import React from "react";
import Day from "./Day";
import IconChevronLeft from "../icons/ChevronLeft";
import IconChevronRight from "../icons/ChevronRight";
import {
  WEEK_DAYS,
  WEEK_START,
  MONTH_NAMES,
  LAST_MONTH_INDEX,
} from "./constants";

function Days(props) {
  const {
    range,
    isDateAllowed,
    monthNames,
    dayNames,
    startDate,
    endDate,
    currentYear: _currentYear,
    currentMonth: _currentMonth,
    secondMonth,
    onChange,
    onMonthLabelClick,
    onPrevMonthClick,
    onNextMonthClick,
  } = props;
  const selectedYear = startDate && startDate.getFullYear();
  const selectedMonth = startDate && startDate.getMonth();
  const selectedDate = startDate && startDate.getDate();
  const selectedEndYear = endDate && endDate.getFullYear();
  const selectedEndMonth = endDate && endDate.getMonth();
  const selectedEndDate = endDate && endDate.getDate();
  const weekStartIndex = WEEK_DAYS.indexOf(WEEK_START);
  const dateObject = new Date(_currentYear, _currentMonth + (secondMonth ? 1 : 0), 1);
  const currentYear = dateObject.getFullYear();
  const currentMonth = dateObject.getMonth();
  const previousMonth = currentMonth > 0 ? currentMonth - 1 : LAST_MONTH_INDEX;
  while (dateObject.getDay() !== weekStartIndex) { // eslint-disable-line no-loops/no-loops
    if (isNaN(dateObject.getDay())) {
      throw new TypeError("isNaN(dateObject.getDay())");
    }
    dateObject.setDate(dateObject.getDate() - 1);
  }
  const days = [];
  const labels = [];
  let month;
  let date;
  // eslint-disable-next-line no-loops/no-loops
  do {
    month = dateObject.getMonth();
    date = dateObject.getDate();
    if (labels.length < WEEK_DAYS.length) {
      labels.push((dayNames || WEEK_DAYS)[dateObject.getDay()]);
    }
    days.push({
      year: currentYear,
      month,
      date,
      muted: month !== currentMonth,
      selected: currentYear === selectedYear
        && month === selectedMonth
        && date === selectedDate,
      rangeEnd: currentYear === selectedEndYear
        && month === selectedEndMonth
        && date === selectedEndDate,
      highlighted: dateObject > startDate && dateObject < endDate,
      disabled: !isDateAllowed({
        year: currentYear,
        month,
        date,
        day: dateObject.getDay(),
      }),
      range,
    });
    dateObject.setDate(dateObject.getDate() + 1);
    if (isNaN(dateObject.getMonth())) {
      throw new TypeError("isNaN(dateObject.getMonth())");
    }
  } while (
    dateObject.getMonth() === previousMonth
    || dateObject.getMonth() === currentMonth
    || dateObject.getDay() !== weekStartIndex
  );
  return (
    <div className={`ui-datepicker-days-of-month${(selectedEndYear && selectedEndMonth && selectedEndDate) ? " range-end-selected" : ""}`}>
      <div className="ui-datepicker-view-header">
        {!secondMonth && (
          <div
            className="ui-datepicker-view-previous"
            onClick={onPrevMonthClick}>
            <IconChevronLeft />
          </div>
        )}
        <div
          onClick={onMonthLabelClick}
          className="ui-datepicker-view-label">
          {(monthNames || MONTH_NAMES)[currentMonth]}
          <span className="year-label">{`, ${currentYear}`}</span>
        </div>
        {(secondMonth || !range) && (
          <div
            className="ui-datepicker-view-next"
            onClick={onNextMonthClick}>
            <IconChevronRight />
          </div>
        )}
      </div>
      {labels.map((item) => (
        <div
          className="ui-datepicker-day-of-month-label ui-label"
          key={item}>
          {item}
        </div>
      ))}
      {days.map((item) => (
        <Day
          key={`${item.month}.${item.date}`}
          onClick={onChange}
          year={item.year}
          month={item.month}
          date={item.date}
          muted={item.muted}
          selected={item.selected}
          rangeEnd={item.rangeEnd}
          disabled={item.disabled}
          range={item.range}
          highlighted={item.highlighted} />
      ))}
    </div>
  );
}

export default Days;
