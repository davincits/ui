import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { CheckBox } from '../src';

const onChangeAction = action('changed');

storiesOf('CheckBox', module)
  .add('common', () => (
    <Container>
      {({ value = 'Lorem ipsum', onChange }) => (
        <CheckBox
          label="Input label"
          value={value}
          onChange={(value) => {
            onChange(value);
            onChangeAction(value);
          }}
        />
      )}
    </Container>
  ))