import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { DateRangePicker } from '../components';
// import IconCalendar from '../components/icons/Calendar';

storiesOf('Date range picker', module)
  .add('common', () => (
    <Container>
      {({ value = [], onChange }) => (
        <div>
          <DateRangePicker
            onChange={onChange}
            value={value}
          />
          <p>Selected range: {value[0]}-{value[1]}</p>
        </div>
      )}
    </Container>
  ));
