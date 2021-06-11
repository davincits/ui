import React, { PureComponent } from "react";
import { classes } from "../utils";

class Day extends PureComponent {
  handleClick = () => {
    const {
      year,
      month,
      date,
      disabled,
      muted,
      onClick,
    } = this.props;
    if (!disabled && !muted) {
      onClick({ year, month, date });
    }
  };

  render() {
    const {
      date,
      muted,
      selected,
      disabled,
      rangeEnd,
      highlighted,
    } = this.props;
    return (
      <div
        className={classes([
          "ui-datepicker-day-of-month",
          muted && "muted",
          !muted && selected && "selected",
          !muted && disabled && "disabled",
          !muted && rangeEnd && "selected-range-end",
          !muted && highlighted && "highlighted",
        ])}
        onClick={this.handleClick}>
        {muted ? "" : date}
      </div>
    );
  }
}

export default Day;
