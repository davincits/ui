import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { Timepicker, Button } from '../components';
import IconCalendar from '../components/icons/Calendar';

storiesOf('Time picker', module)
  .add('common', () => (
    <Container>
      {({ value = '', onChange }) => (
        <div>
          <Timepicker
            onChange={(val) => {
              onChange(val);
              action('changed')(val);
            }}
            value={value}
          />
          <p>Selected time: {value}</p>
        </div>
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
          onChange={(val) => {
            onChange(val);
            action('changed')(val);
          }}
          value={value}
        />
      )}
    </Container>
  ));
