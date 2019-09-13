import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { Select } from '../src';

const onChangeAction = action('changed');

const OPTIONS = [
  {
    value: 'first',
    label: 'First option',
  },
  {
    value: 'second',
    label: 'Second option',
  },
  {
    value: 'third',
    label: 'Third option',
  },
  {
    value: 'fourth',
    label: 'Fourth option',
  },
  {
    value: 'fifth',
    label: 'Fifth option',
  }
];

storiesOf('Select', module)
  .add('common', () => (
    <Container>
      {({ value = OPTIONS[0].value, onChange }) => (
        <div style={{ width: '240px'}}>
          <Select
            label="Input label"
            value={value}
            options={OPTIONS}
            onChange={(value) => {
              onChange(value);
              onChangeAction(value);
            }}
          />
        </div>
      )}
    </Container>
  ))