import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { Range } from '../components';


storiesOf('Range', module)
  .add('common', () => (
    <Container>
      {({ value = [20, 80], onChange }) => (
        <div>
          <span>Value: min - {value[0]}, max - {value[1]}</span>
          <Range
            min={10}
            max={100}
            value={value}
            onChange={onChange}
          />
        </div>
      )}
    </Container>
  ));
