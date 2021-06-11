import React from "react";
import Month from "./Month";
import IconChevronLeft from "../icons/ChevronLeft";
import IconChevronRight from "../icons/ChevronRight";
import { MONTH_NAMES } from "./constants";

function Months(props) {
  const {
    monthNames,
    startDate,
    currentYear,
    onMonthClick,
    onYearLabelClick,
    onPrevYearClick,
    onNextYearClick,
    isMonthAllowed,
  } = props;
  const selectedYear = startDate && startDate.getFullYear();
  const selectedMonth = startDate && startDate.getMonth();
  return (
    <div className="ui-datepicker-monthes-of-year">
      <div className="ui-datepicker-view-header">
        <div
          className="ui-datepicker-view-previous"
          onClick={onPrevYearClick}>
          <IconChevronLeft />
        </div>
        <div
          onClick={onYearLabelClick}
          className="ui-datepicker-view-label">
          {currentYear}
        </div>
        <div
          className="ui-datepicker-view-next"
          onClick={onNextYearClick}>
          <IconChevronRight />
        </div>
      </div>
      {MONTH_NAMES.map((name, index) => (
        <Month
          key={name}
          month={index}
          name={monthNames ? monthNames[index] : name}
          selected={currentYear === selectedYear && index === selectedMonth}
          disabled={!isMonthAllowed({ year: currentYear, month: index })}
          onClick={onMonthClick} />
      ))}
    </div>
  );
}

export default Months;
