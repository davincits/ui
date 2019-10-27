import './style.scss';

import React, { PureComponent } from 'react';
import TextField from '../TextField';
import DropDown from '../DropDown';
import IconCalendar from '../icons/Calendar';
import Content from './Content';
import { classes } from '../utils';

class Datepicker extends PureComponent {
  state = {}

  onChange = (date) => {
    console.log({ date });
  }

  render() {
    const {
      value,
      label,
      className,
      onChange,
    } = this.props;
    const date = value ? new Date(value) : new Date();
    return (
      <div className={classes(['ui-datepicker', className])}>
        <DropDown
          button={(
            <div className="ui-datepicker-icon-container">
              <IconCalendar />
            </div>
          )}
          inline={false}
          name="ui-datepicker"
        >
          <Content
            date={date}
            onChange={this.onChange}
          />
        </DropDown>
      </div>
    );
  }
}

export default Datepicker;
