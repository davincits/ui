import React, { PureComponent } from 'react';
import Year from './Year';
import Month from './Month';
import Day from './Day';
import IconChevronLeft from '../icons/ChevronLeft';
import IconChevronRight from '../icons/ChevronRight';
import {
  WEEK_DAYS,
  WEEK_START,
  MONTH_NAMES,
  LAST_MONTH_INDEX,
  YEARS_PER_PAGE,
} from './constants';
import { classes } from '../utils';

const MONTH_VIEW = 1;
const YEAR_VIEW = 2;
const YEARS_VIEW = 3;

class Content extends PureComponent {
  constructor(props) {
    super(props);
    const { startDate = new Date() } = props;
    const year = startDate.getFullYear();
    const month = startDate.getMonth();
    this.state = {
      currentYear: year,
      currentMonth: month,
      selectedYear: year,
      selectedMonth: month,
      view: MONTH_VIEW,
    };
  }

  onChange = ({ year, month, date }) => {
    const { onChange } = this.props;
    const startDateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    onChange(startDateString);
  }

  setCurrentMonth = (currentMonth) => {
    this.setState({ currentMonth });
  }

  setCurrentYear = (currentYear) => {
    this.setState({ currentYear });
  }

  onPrevMonthClick = () => {
    const {
      currentMonth,
      currentYear,
    } = this.state;
    const newMonth = currentMonth - 1;
    if (newMonth < 0) {
      this.setCurrentMonth(LAST_MONTH_INDEX);
      this.setCurrentYear(currentYear - 1);
    } else {
      this.setCurrentMonth(newMonth);
    }
  }

  onNextMonthClick = () => {
    const {
      currentMonth,
      currentYear,
    } = this.state;
    const newMonth = currentMonth + 1;
    if (newMonth > LAST_MONTH_INDEX) {
      this.setCurrentMonth(0);
      this.setCurrentYear(currentYear + 1);
    } else {
      this.setCurrentMonth(newMonth);
    }
  }

  onPrevYearClick = () => {
    const { currentYear } = this.state;
    this.setCurrentYear(currentYear - 1);
  }

  onNextYearClick = () => {
    const { currentYear } = this.state;
    this.setCurrentYear(currentYear + 1);
  }

  onMonthLabelClick = () => {
    setTimeout(() => {
      this.setState({ view: YEAR_VIEW });
    }, 0);
  }

  onYearLabelClick = () => {
    setTimeout(() => {
      this.setState({ view: YEARS_VIEW });
    }, 0);
  }

  onMonthClick = (month) => {
    this.setCurrentMonth(month);
    setTimeout(() => {
      this.setState({ view: MONTH_VIEW });
    }, 0);
  }

  onYearClick = (year) => {
    this.setCurrentYear(year);
    setTimeout(() => {
      this.setState({ view: YEAR_VIEW });
    }, 0);
  }

  onPrevYearsClick = () => {
    const { currentYear } = this.state;
    this.setCurrentYear(currentYear - YEARS_PER_PAGE);
  }

  onNextYearsClick = () => {
    const { currentYear } = this.state;
    this.setCurrentYear(currentYear + YEARS_PER_PAGE);
  }

  renderYearsView() {
    const {
      currentYear,
      selectedYear,
    } = this.state;
    const years = [];
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
            onClick={this.onPrevYearsClick}
          >
            <IconChevronLeft />
          </div>
          <div className="ui-datepicker-view-label">
            {`${startYear} - ${startYear + YEARS_PER_PAGE - 1}`}
          </div>
          <div
            className="ui-datepicker-view-next"
            onClick={this.onNextYearsClick}
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
            onClick={this.onYearClick}
          />
        ))}
      </div>
    );
  }

  renderYearView() {
    const { monthNames } = this.props;
    const {
      currentYear,
      selectedYear,
      selectedMonth,
    } = this.state;
    return (
      <div className="ui-datepicker-monthes-of-year">
        <div className="ui-datepicker-view-header">
          <div
            className="ui-datepicker-view-previous"
            onClick={this.onPrevYearClick}
          >
            <IconChevronLeft />
          </div>
          <div
            onClick={this.onYearLabelClick}
            className="ui-datepicker-view-label"
          >
            {currentYear}
          </div>
          <div
            className="ui-datepicker-view-next"
            onClick={this.onNextYearClick}
          >
            <IconChevronRight />
          </div>
        </div>
        {MONTH_NAMES.map((name, index) => (
          <Month
            key={name}
            month={index}
            name={monthNames ? monthNames[index] : name}
            selected={currentYear === selectedYear && index === selectedMonth}
            onClick={this.onMonthClick}
          />
        ))}
      </div>
    );
  }

  renderMonthView(isSecondMonth) {
    const {
      range,
      isDateAllowed,
      monthNames,
      dayNames,
      startDate,
      endDate,
    } = this.props;
    const {
      currentYear: _currentYear,
      currentMonth: _currentMonth,
    } = this.state;
    const selectedYear = startDate && startDate.getFullYear();
    const selectedMonth = startDate && startDate.getMonth();
    const selectedDate = startDate && startDate.getDate();
    const selectedEndYear = endDate && endDate.getFullYear();
    const selectedEndMonth = endDate && endDate.getMonth();
    const selectedEndDate = endDate && endDate.getDate();
    const weekStartIndex = WEEK_DAYS.indexOf(WEEK_START);
    const dateObject = new Date(_currentYear, _currentMonth + (isSecondMonth ? 1 : 0), 1);
    const currentYear = dateObject.getFullYear();
    const currentMonth = dateObject.getMonth();
    const previousMonth = currentMonth > 0 ? currentMonth - 1 : LAST_MONTH_INDEX;
    while (dateObject.getDay() !== weekStartIndex) {
      if (isNaN(dateObject.getDay())) {
        throw Error('isNaN(dateObject.getDay())');
      }
      dateObject.setDate(dateObject.getDate() - 1);
    }
    const days = [];
    const labels = [];
    let month;
    let date;
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
        throw Error('isNaN(dateObject.getMonth())');
      }
    } while (
      dateObject.getMonth() === previousMonth
      || dateObject.getMonth() === currentMonth
      || dateObject.getDay() !== weekStartIndex
    );
    return (
      <div className="ui-datepicker-days-of-month">
        <div className="ui-datepicker-view-header">
          {!isSecondMonth && (
            <div
              className="ui-datepicker-view-previous"
              onClick={this.onPrevMonthClick}
            >
              <IconChevronLeft />
            </div>
          )}
          <div
            onClick={this.onMonthLabelClick}
            className="ui-datepicker-view-label"
          >
            {(monthNames || MONTH_NAMES)[currentMonth]}
            <span className="year-label">, {currentYear}</span>
          </div>
          {(isSecondMonth || !range) && (
            <div
              className="ui-datepicker-view-next"
              onClick={this.onNextMonthClick}
            >
              <IconChevronRight />
            </div>
          )}
        </div>
        {labels.map((item, index) => (
          <div
            className="ui-datepicker-day-of-month-label ui-label"
            key={index} // eslint-disable-line react/no-array-index-key
          >
            {item}
          </div>
        ))}
        {days.map((item) => (
          <Day
            key={`${item.month}.${item.date}`}
            onClick={this.onChange}
            year={item.year}
            month={item.month}
            date={item.date}
            muted={item.muted}
            selected={item.selected}
            rangeEnd={item.rangeEnd}
            disabled={item.disabled}
            range={item.range}
            highlighted={item.highlighted}
          />
        ))}
      </div>
    );
  }

  renderContent() {
    const { range } = this.props;
    const { view } = this.state;
    switch (view) {
      case YEARS_VIEW:
        return this.renderYearsView();
      case YEAR_VIEW:
        return this.renderYearView();
      default:
        return (
          <div className="ui-datepicker-month-row">
            <div className="ui-datepicker-month-col">
              {this.renderMonthView()}
            </div>
            {range && (
              <div className="ui-datepicker-month-col">
                {this.renderMonthView(true)}
              </div>
            )}
          </div>
        );
    }
  }

  render() {
    const { range } = this.props;
    return (
      <div className={`ui-datepicker-content${range ? ' ui-datepicker-range-content' : ''}`}>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
