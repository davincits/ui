import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { Datepicker, Button } from '../components';
import IconCalendar from '../components/icons/Calendar';

storiesOf('Date picker', module)
  .add('common', () => (
    <Container>
      {({ value = '', onChange }) => (
        <div>
          <Datepicker
            onChange={onChange}
            value={value}
          />
          <p>Selected date: {value}</p>
        </div>
      )}
    </Container>
  ))
  .add('allowed dates', () => (
    <Container>
      {({ value = '', onChange }) => (
        <div>
          <Datepicker
            label={(
              <Button>
                <IconCalendar />
                {value || 'Select a date'}
              </Button>
            )}
            onChange={onChange}
            isDateAllowed={({ year, month, date }) => new Date(year, month, date) > Date.now()}
            value={value}
          />
        </div>
      )}
    </Container>
  ))
  .add('button', () => (
    <Container>
      {({ value = '', onChange }) => (
        <Datepicker
          label={(
            <Button>
              <IconCalendar />
              {value || 'Select a date'}
            </Button>
          )}
          onChange={onChange}
          value={value}
        />
      )}
    </Container>
  ))
  .add('range', () => (
    <Container>
      {({ value = [], onChange }) => (
        <div>
          <Datepicker
            onChange={onChange}
            value={value}
            range
          />
          <p>Selected range: {value.join(' / ')}</p>
        </div>
      )}
    </Container>
  ))
  .add('disabled', () => (
    <Container>
      {({ value = '', onChange }) => (
        <div>
          <Datepicker
            onChange={onChange}
            value={value}
            disabled
          />
        </div>
      )}
    </Container>
  ));
