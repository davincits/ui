import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { Select } from '../components';

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
  },
];

storiesOf('Select', module)
  .add('common', () => (
    <Container>
      {({ value = OPTIONS[0].value, onChange }) => (
        <div style={{ width: '240px' }}>
          <div>
            <Select
              label="Input label"
              value={value}
              options={OPTIONS}
              onChange={onChange}
            />
          </div>
          <div className="u-padding-top">
            <Select
              label="Input label"
              value={value}
              options={OPTIONS}
              onChange={onChange}
            />
          </div>
          <div className="u-padding-top">
            <Select
              label="Input label"
              value={value}
              options={OPTIONS}
              onChange={onChange}
            />
          </div>
        </div>
      )}
    </Container>
  ));
