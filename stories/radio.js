import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { Radio } from '../components';

const onChangeAction = action('changed');

storiesOf('Radio', module)
  .add('common', () => (
    <Container>
      {({ value = 2, onChange }) => (
        <div>
          <Radio
            label="Input label #1"
            value={1}
            checked={value === 1}
            onChange={(value) => {
              onChange(value);
              onChangeAction(value);
            }}
          />
          <Radio
            label="Input label #2"
            value={2}
            checked={value === 2}
            onChange={(value) => {
              onChange(value);
              onChangeAction(value);
            }}
          />
          <Radio
            label="Input label #3"
            value={3}
            checked={value === 3}
            onChange={(value) => {
              onChange(value);
              onChangeAction(value);
            }}
          />
        </div>
      )}
    </Container>
  ))