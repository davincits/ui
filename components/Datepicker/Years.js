import React from 'react';
import Year from './Year';
import IconChevronLeft from '../icons/ChevronLeft';
import IconChevronRight from '../icons/ChevronRight';
import { YEARS_PER_PAGE } from './constants';

function Years(props) {
  const {
    currentYear,
    startDate,
    onYearClick,
    onNextYearsClick,
    onPrevYearsClick,
  } = props;
  const years = [];
  const selectedYear = startDate && startDate.getFullYear();
  const startYear = currentYear - currentYear % YEARS_PER_PAGE;
  for (let i = 0; i < YEARS_PER_PAGE; i++) {
    const _year = startYear + i;
    years.push({
      year: _year,
      selected: _year === selectedYear,
    });
  }
  return (
    <div className="ui-datepicker-years">
      <div className="ui-datepicker-view-header">
        <div
          className="ui-datepicker-view-previous"
          onClick={onPrevYearsClick}
        >
          <IconChevronLeft />
        </div>
        <div className="ui-datepicker-view-label">
          {`${startYear} - ${startYear + YEARS_PER_PAGE - 1}`}
        </div>
        <div
          className="ui-datepicker-view-next"
          onClick={onNextYearsClick}
        >
          <IconChevronRight />
        </div>
      </div>
      {years.map(({ year, selected, disabled }) => (
        <Year
          key={year}
          year={year}
          selected={selected}
          disabled={disabled}
          onClick={onYearClick}
        />
      ))}
    </div>
  );
}

export default Years;
