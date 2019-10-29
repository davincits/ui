import React, { PureComponent } from 'react';

class Day extends PureComponent {
  onClick = () => {
    const {
      year, month, date, disabled, onClick,
    } = this.props;
    if (!disabled) onClick({ year, month, date });
  }

  render() {
    const {
      date,
      muted,
      selected,
      disabled,
    } = this.props;
    return (
      <div
        className={`ui-datepicker-day-of-month${muted ? ' muted' : ''}${selected ? ' selected' : ''}${disabled ? ' disabled' : ''}`}
        onClick={this.onClick}
      >
        {date}
      </div>
    );
  }
}

export default Day;
