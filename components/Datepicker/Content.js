import React, { PureComponent } from 'react';
import Years from './Years';
import Months from './Months';
import Days from './Days';
import {
  LAST_MONTH_INDEX,
  YEARS_PER_PAGE,
} from './constants';

export const DAYS_VIEW = 1;
export const MONTHES_VIEW = 2;
export const YEARS_VIEW = 3;

class Content extends PureComponent {
  constructor(props, context) {
    super(props, context);
    const {
      startDate = new Date(),
      view = DAYS_VIEW,
    } = props;
    const year = startDate.getFullYear();
    const month = startDate.getMonth();
    this.state = {
      currentYear: year,
      currentMonth: month,
      view,
    };
  }

  onChange = ({ year, month, date }) => {
    const { onChange } = this.props;
    const startDateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(date).padStart(2, '0')}`;
    onChange(startDateString);
  }

  setCurrentMonth = (currentMonth) => {
    const { withoutDate } = this.props;
    if (!withoutDate) {
      this.setState({ currentMonth });
      return;
    }
    const { currentYear } = this.state;
    this.onChange({
      year: currentYear,
      month: currentMonth,
      date: 1,
    });
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
      this.setState({ view: MONTHES_VIEW });
    }, 0);
  }

  onYearLabelClick = () => {
    setTimeout(() => {
      this.setState({ view: YEARS_VIEW });
    }, 0);
  }

  onMonthClick = (month) => {
    const { withoutDate } = this.props;
    this.setCurrentMonth(month);
    if (withoutDate) return;
    setTimeout(() => {
      this.setState({ view: DAYS_VIEW });
    }, 0);
  }

  onYearClick = (year) => {
    this.setCurrentYear(year);
    setTimeout(() => {
      this.setState({ view: MONTHES_VIEW });
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

  renderContent() {
    const {
      isDateAllowed,
      monthNames,
      dayNames,
      startDate,
      endDate,
      range,
      isMonthAllowed,
      isYearAllowed,
    } = this.props;
    const {
      view,
      currentYear,
      currentMonth,
    } = this.state;
    switch (view) {
      case YEARS_VIEW:
        return (
          <Years
            currentYear={currentYear}
            startDate={startDate}
            onYearClick={this.onYearClick}
            onNextYearsClick={this.onNextYearsClick}
            onPrevYearsClick={this.onPrevYearsClick}
            isYearAllowed={isYearAllowed}
          />
        );
      case MONTHES_VIEW:
        return (
          <Months
            onMonthClick={this.onMonthClick}
            onYearLabelClick={this.onYearLabelClick}
            onPrevYearClick={this.onPrevYearClick}
            onNextYearClick={this.onNextYearClick}
            startDate={startDate}
            currentYear={currentYear}
            monthNames={monthNames}
            isMonthAllowed={isMonthAllowed}
          />
        );
      default:
        return (
          <div className="ui-datepicker-month-row">
            <div className="ui-datepicker-month-col">
              <Days
                isDateAllowed={isDateAllowed}
                monthNames={monthNames}
                dayNames={dayNames}
                startDate={startDate}
                endDate={endDate}
                range={range}
                currentYear={currentYear}
                currentMonth={currentMonth}
                onChange={this.onChange}
                onMonthLabelClick={this.onMonthLabelClick}
                onPrevMonthClick={this.onPrevMonthClick}
                onNextMonthClick={this.onNextMonthClick}
              />
            </div>
            {range && (
              <div className="ui-datepicker-month-col">
                <Days
                  isDateAllowed={isDateAllowed}
                  monthNames={monthNames}
                  dayNames={dayNames}
                  startDate={startDate}
                  endDate={endDate}
                  range={range}
                  currentYear={currentYear}
                  currentMonth={currentMonth}
                  onChange={this.onChange}
                  onMonthLabelClick={this.onMonthLabelClick}
                  onPrevMonthClick={this.onPrevMonthClick}
                  onNextMonthClick={this.onNextMonthClick}
                  secondMonth
                />
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
