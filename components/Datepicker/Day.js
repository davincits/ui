import React, { PureComponent } from 'react';

class Day extends PureComponent {
  onClick = () => {
    const {
      year, month, day, onClick,
    } = this.props;
    onClick({ year, month, day });
  }

  render() {
    const { day, muted } = this.props;
    return (
      <div
        className={`ui-datepicker-day-of-month${muted ? ' muted' : ''}`}
        onClick={this.onClick}
      >
        {day}
      </div>
    );
  }
}

export default Day;
