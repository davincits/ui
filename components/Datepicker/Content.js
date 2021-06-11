import React, { PureComponent } from "react";
import Years from "./Years";
import Months from "./Months";
import Days from "./Days";
import {
  LAST_MONTH_INDEX,
  YEARS_PER_PAGE,
} from "./constants";

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

  handleChange = ({ year, month, date }) => {
    const { onChange } = this.props;
    const startDateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(date).padStart(2, "0")}`;
    onChange(startDateString);
  };

  setCurrentMonth = (currentMonth) => {
    const { withoutDate } = this.props;
    if (!withoutDate) {
      this.setState({ currentMonth });
      return;
    }
    const { currentYear } = this.state;
    this.handleChange({
      year: currentYear,
      month: currentMonth,
      date: 1,
    });
  };

  setCurrentYear = (currentYear) => {
    this.setState({ currentYear });
  };

  handlePrevMonthClick = () => {
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
  };

  handleNextMonthClick = () => {
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
  };

  handlePrevYearClick = () => {
    const { currentYear } = this.state;
    this.setCurrentYear(currentYear - 1);
  };

  handleNextYearClick = () => {
    const { currentYear } = this.state;
    this.setCurrentYear(currentYear + 1);
  };

  handleMonthLabelClick = () => {
    setTimeout(() => {
      this.setState({ view: MONTHES_VIEW });
    }, 0);
  };

  handleYearLabelClick = () => {
    setTimeout(() => {
      this.setState({ view: YEARS_VIEW });
    }, 0);
  };

  handleMonthClick = (month) => {
    const { withoutDate } = this.props;
    this.setCurrentMonth(month);
    if (withoutDate) return;
    setTimeout(() => {
      this.setState({ view: DAYS_VIEW });
    }, 0);
  };

  handleYearClick = (year) => {
    this.setCurrentYear(year);
    setTimeout(() => {
      this.setState({ view: MONTHES_VIEW });
    }, 0);
  };

  handlePrevYearsClick = () => {
    const { currentYear } = this.state;
    this.setCurrentYear(currentYear - YEARS_PER_PAGE);
  };

  handleNextYearsClick = () => {
    const { currentYear } = this.state;
    this.setCurrentYear(currentYear + YEARS_PER_PAGE);
  };

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
            onYearClick={this.handleYearClick}
            onNextYearsClick={this.handleNextYearsClick}
            onPrevYearsClick={this.handlePrevYearsClick}
            isYearAllowed={isYearAllowed} />
        );
      case MONTHES_VIEW:
        return (
          <Months
            onMonthClick={this.handleMonthClick}
            onYearLabelClick={this.handleYearLabelClick}
            onPrevYearClick={this.handlePrevYearClick}
            onNextYearClick={this.handleNextYearClick}
            startDate={startDate}
            currentYear={currentYear}
            monthNames={monthNames}
            isMonthAllowed={isMonthAllowed} />
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
                onChange={this.handleChange}
                onMonthLabelClick={this.handleMonthLabelClick}
                onPrevMonthClick={this.handlePrevMonthClick}
                onNextMonthClick={this.handleNextMonthClick} />
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
                  onChange={this.handleChange}
                  onMonthLabelClick={this.handleMonthLabelClick}
                  onPrevMonthClick={this.handlePrevMonthClick}
                  onNextMonthClick={this.handleNextMonthClick}
                  secondMonth />
              </div>
            )}
          </div>
        );
    }
  }

  render() {
    const { range } = this.props;
    return (
      <div className={`ui-datepicker-content${range ? " ui-datepicker-range-content" : ""}`}>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
