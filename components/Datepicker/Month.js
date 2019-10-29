import React, { PureComponent } from 'react';

class Month extends PureComponent {
  onClick = () => {
    const { month, onClick } = this.props;
    onClick(month);
  }

  render() {
    const { name, selected } = this.props;
    return (
      <div
        className={`ui-datepicker-month-of-year-label${selected ? ' selected' : ''}`}
        onClick={this.onClick}
      >
        {name}
      </div>
    );
  }
}

export default Month;
