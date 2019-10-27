import React from 'react';
import Day from './Day';
import { DAY, WEEK_DAYS, WEEK_START } from './constants';

function Month({ year, month, day }) {
  const weekStartIndex = WEEK_DAYS.indexOf(WEEK_START);
  const date = new Date(year, month, day);
  date.setDate(1);
  while (date.getDay() !== weekStartIndex) {
    date.setTime(date.getTime() - DAY);
  }
  const days = [];
  const labels = [];
  let _month;
  let _day;
  do {
    _month = date.getMonth();
    _day = date.getDate();
    if (labels.length < WEEK_DAYS.length) {
      labels.push(WEEK_DAYS[date.getDay()]);
    }
    days.push({
      year,
      month: _month,
      day: _day,
      muted: _month !== month,
    });
    date.setTime(date.getTime() + DAY);
  } while (_month <= month || date.getDay() !== weekStartIndex);
  return (
    <div className="ui-datepicker-days-of-month">
      {labels.map((item) => (
        <div
          className="ui-datepicker-day-of-month-label ui-label"
          key={item}
        >
          {item}
        </div>
      ))}
      {days.map((item) => (
        <Day
          key={`${item.month}.${item.day}`}
          {...item}
        />
      ))}
    </div>
  );
}

export default Month;
