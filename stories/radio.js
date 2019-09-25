import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { RadioGroup, Radio } from '../components';

const onChangeAction = action('changed');

storiesOf('Radio', module)
  .add('common', () => (
    <Container>
      {({ value = 2, onChange }) => (
        <RadioGroup
          onChange={(value) => {
            onChange(value);
            onChangeAction(value);
          }}
          value={value}
        >
          <Radio value={1}>Input label #1</Radio>
          <Radio value={2}>Input label #2</Radio>
          <Radio value={3}>Input label #3</Radio>
        </RadioGroup>
      )}
    </Container>
  ))
  .add('disabled', () => (
    <Container>
      {({ value = 2, onChange }) => (
        <RadioGroup
          onChange={(value) => {
            onChange(value);
            onChangeAction(value);
          }}
          value={value}
        >
          <Radio value={1} disabled>Input label #1</Radio>
          <Radio value={2} disabled>Input label #2</Radio>
          <Radio value={3} disabled>Input label #3</Radio>
        </RadioGroup>
      )}
    </Container>
  ))