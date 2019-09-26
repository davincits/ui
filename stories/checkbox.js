import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { CheckBox } from '../components';

const onChangeAction = action('changed');

storiesOf('CheckBox', module)
  .add('common', () => (
    <Container>
      {({ value, onChange }) => (
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