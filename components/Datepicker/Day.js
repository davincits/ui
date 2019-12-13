import React, { PureComponent } from 'react';
import { classes } from '../utils';

class Day extends PureComponent {
  onClick = () => {
    const {
      year,
      month,
      date,
      disabled,
      muted,
      range,
      onClick,
    } = this.props;
    if (!disabled || (range && muted)) onClick({ year, month, date });
  }

  render() {
    const {
      date,
      muted,
      selected,
      disabled,
      range,
      rangeEnd,
      highlighted,
    } = this.props;
    return (
      <div
        className={classes([
          'ui-datepicker-day-of-month',
          muted && 'muted',
          selected && 'selected',
          disabled && 'disabled',
          rangeEnd && 'selected-range-end',
          !muted && highlighted && 'highlighted',
        ])}
        onClick={this.onClick}
      >
        {(range && muted) ? '' : date}
      </div>
    );
  }
}

export default Day;
