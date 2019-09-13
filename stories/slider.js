import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { Slider } from '../src';

const onChangeAction = action('changed');

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
            onChange={(value) => {
              onChange(value);
              onChangeAction(value);
            }}
          />
        </div>
      )}
    </Container>
  ))
