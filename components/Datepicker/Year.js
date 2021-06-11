import React, { PureComponent } from "react";

class Year extends PureComponent {
  handleClick = () => {
    const { year, disabled, onClick } = this.props;
    if (!disabled) onClick(year);
  };

  render() {
    const { year, selected, disabled } = this.props;
    return (
      <div
        className={`ui-datepicker-year-label${selected ? " selected" : ""}${disabled ? " disabled" : ""}`}
        onClick={this.handleClick}>
        {year}
      </div>
    );
  }
}

export default Year;
