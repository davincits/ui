import React, { PureComponent } from "react";

class Month extends PureComponent {
  handleClick = () => {
    const { month, disabled, onClick } = this.props;
    if (!disabled) onClick(month);
  };

  render() {
    const { name, selected, disabled } = this.props;
    return (
      <div
        className={`ui-datepicker-month-of-year-label${selected ? " selected" : ""}${disabled ? " disabled" : ""}`}
        onClick={this.handleClick}>
        {name}
      </div>
    );
  }
}

export default Month;
