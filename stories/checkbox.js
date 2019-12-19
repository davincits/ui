import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { CheckBox } from '../components';

storiesOf('CheckBox', module)
  .add('common', () => (
    <Container>
      {({ value, onChange }) => (
        <CheckBox
          label="Input label"
          value={value}
          onChange={onChange}
        />
      )}
    </Container>
  ));
