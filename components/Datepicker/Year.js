import React, { PureComponent } from 'react';

class Year extends PureComponent {
  onClick = () => {
    const { year, onClick } = this.props;
    onClick(year);
  }

  render() {
    const { year, selected } = this.props;
    return (
      <div
        className={`ui-datepicker-year-label${selected ? ' selected' : ''}`}
        onClick={this.onClick}
      >
        {year}
      </div>
    );
  }
}

export default Year;
