import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { Timepicker, Button } from '../components';
import IconCalendar from '../components/icons/Calendar';

storiesOf('Time picker', module)
  .add('common', () => (
    <Container>
      {({ value = '', onChange }) => (
        <div>
          <Timepicker
            onChange={onChange}
            value={value}
          />
          <p>Selected time: {value}</p>
        </div>
      )}
    </Container>
  ))
  .add('allowed time', () => (
    <Container>
      {({ value = '', onChange }) => (
        <Timepicker
          label={(
            <Button>
              <IconCalendar />
              {value || 'Select a time'}
            </Button>
          )}
          isTimeAllowed={({ hours, minutes }) => {
            const start = 7 * 60 + 30; // from 07:30
            const end = 18 * 60 + 45; // to 18:45
            const time = hours * 60 + minutes;
            return time >= start && time <= end;
          }}
          onChange={onChange}
          value={value}
        />
      )}
    </Container>
  ))
  .add('button', () => (
    <Container>
      {({ value = '', onChange }) => (
        <Timepicker
          label={(
            <Button>
              <IconCalendar />
              {value || 'Select a time'}
            </Button>
          )}
          onChange={onChange}
          value={value}
        />
      )}
    </Container>
  ));
