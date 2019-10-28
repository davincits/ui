import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { Datepicker, Button, TextField } from '../components';
import IconCalendar from '../components/icons/Calendar';

storiesOf('Date picker', module)
  .add('common', () => (
    <Container>
      {({ value = '', onChange }) => (
        <div>
          <Datepicker
            onChange={(val) => {
              onChange(val);
              action('changed')(val);
            }}
            value={value}
          />
          <p>Selected date: {value}</p>
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
          onChange={(val) => {
            onChange(val);
            action('changed')(val);
          }}
          value={value}
        />
      )}
    </Container>
  ));
