import React, { PureComponent } from 'react';

class Month extends PureComponent {
  onClick = () => {
    const { month, disabled, onClick } = this.props;
    if (!disabled) onClick(month);
  }

  render() {
    const { name, selected, disabled } = this.props;
    return (
      <div
        className={`ui-datepicker-month-of-year-label${selected ? ' selected' : ''}${disabled ? ' disabled' : ''}`}
        onClick={this.onClick}
      >
        {name}
      </div>
    );
  }
}

export default Month;
