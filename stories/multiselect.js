import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { MultiSelect } from '../components';

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

storiesOf('MultiSelect', module)
  .add('common', () => (
    <Container>
      {({ value, onChange }) => (
        <div style={{ width: '240px'}}>
          <MultiSelect
            label="Input label"
            value={value}
            options={OPTIONS}
            onChange={(value) => {
              onChange(value);
              action('changed')(value);
            }}
          />
        </div>
      )}
    </Container>
  ))