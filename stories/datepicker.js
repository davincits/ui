import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { Datepicker } from '../components';

storiesOf('Date picker', module)
  .add('common', () => (
    <Container>
      {({ value = '', onChange }) => (
        <Datepicker
          label="Date picker"
          onChange={(val) => {
            onChange(val);
            action('changed')(val);
          }}
          value={value}
        />
      )}
    </Container>
  ));
