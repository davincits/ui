import './style.scss';

import React, { PureComponent } from 'react';
import Label from './Label';

const parseAloowedTimeString = (string) => string.split(';')
  .map((p) => p.split('-').map((t) => t.split(':').map((s) => parseInt(s, 10))));
const isTimeAllowed = ({ hours: h, minutes: m }, a) => (!a || a.some(([[h1, m1], [h2, m2]]) => {
  if (m === null) {
    return (h >= h1) && (h <= h2);
  }
  return ((h === h1) ? (m >= m1) : (h > h1)) && ((h === h2) ? (m <= m2) : (h < h2));
}));

class Datepicker extends PureComponent {
  constructor(props) {
    super(props);
    const { value } = props;
    let hours = null;
    let minutes = null;
    if (value && (typeof value === 'string')) {
      const [a, b] = value ? value.split(':') : [0, 0];
      hours = Number(a);
      minutes = Number(b);
    }
    this.state = {
      hoursView: true,
      hours,
      minutes,
    };
  }

  onChange = (time) => {
    const { onChange } = this.props;
    const { hours, minutes } = this.state;
    onChange(`${String(hours || 0).padStart(2, '0')}:${String(minutes || 0).padStart(2, '0')}`);
  }

  onHourClick = (hours) => {
    setTimeout(() => {
      this.setState({
        hoursView: false,
        hours,
      });
    }, 0);
  }

  onMinuteClick = (minutes) => {
    this.setState({ minutes }, () => {
      this.onChange();
    });
  }

  render() {
    const { allowedTime: allowedTimeString } = this.props;
    const { hoursView, hours, minutes } = this.state;
    const hoursTable = [];
    const minutesTable = [];
    const allowedTime = allowedTimeString ? parseAloowedTimeString(allowedTimeString) : null;
    if (hoursView) {
      for (let i = 1; i < 13; i++) {
        hoursTable.push({
          label: i,
          position: i,
          disabled: !isTimeAllowed({ hours: i, minutes }, allowedTime),
        });
      }
      for (let i = 13; i < 25; i++) {
        hoursTable.push({
          label: i < 24 ? i : 0,
          position: (i - 12),
          inner: true,
          disabled: !isTimeAllowed({ hours: i < 24 ? i : 0, minutes }, allowedTime),
        });
      }
    } else {
      for (let i = 1; i < 13; i++) {
        minutesTable.push({
          label: i < 12 ? i * 5 : 0,
          position: i,
          inner: true,
          disabled: !isTimeAllowed({ hours, minutes: i < 12 ? i * 5 : 0 }, allowedTime),
        });
      }
    }
    return (
      <div className="ui-timepicker-content">
        {hoursView ? (
          <div className="ui-timepicker-minutes-view">
            {hoursTable.map(({
              label, position, inner, disabled,
            }) => (
              <Label
                key={label}
                label={label > 0 ? label : '00'}
                position={position}
                inner={inner}
                value={label}
                selected={hours === label}
                onClick={this.onHourClick}
                disabled={disabled}
                type="hour"
              />
            ))}
          </div>
        ) : (
          <div className="ui-timepicker-hours-view">
            {minutesTable.map(({ label, position, disabled }) => (
              <Label
                key={label}
                label={String(label).padStart(2, '0')}
                position={position}
                value={label}
                selected={minutes === label}
                onClick={this.onMinuteClick}
                disabled={disabled}
                type="minute"
              />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Datepicker;
