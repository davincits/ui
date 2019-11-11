import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { Slider } from '../components';

storiesOf('Slider', module)
  .add('common', () => (
    <Container>
      {({ value = 50, onChange }) => (
        <div>
          <span>Value: {value}</span>
          <Slider
            min={10}
            max={100}
            value={value}
            onChange={onChange}
          />
        </div>
      )}
    </Container>
  ));
