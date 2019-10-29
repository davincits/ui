import React, { PureComponent } from 'react';

class Day extends PureComponent {
  onClick = () => {
    const {
      year, month, date, onClick,
    } = this.props;
    onClick({ year, month, date });
  }

  render() {
    const { date, muted, selected } = this.props;
    return (
      <div
        className={`ui-datepicker-day-of-month${muted ? ' muted' : ''}${selected ? ' selected' : ''}`}
        onClick={this.onClick}
      >
        {date}
      </div>
    );
  }
}

export default Day;
