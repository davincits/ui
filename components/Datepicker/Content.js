import React, { PureComponent } from 'react';
import Month from './Month';

class Content extends PureComponent {
  state = {}

  render() {
    const { date } = this.props;
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    return (
      <div className="ui-datepicker-content">
        <Month year={year} month={month} day={day} />
      </div>
    );
  }
}

export default Content;
