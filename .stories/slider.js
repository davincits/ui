import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { Slider } from '../components';

storiesOf('Slider', module)
  .add('common', () => (
    <Container>
      {({ value: [first, second] = [50, 60], onChange }) => (
        <div>
          <div>
            <span>Value: {first}</span>
            <Slider
              min={10}
              max={100}
              value={first}
              onChange={(val) => onChange([val, second])}
            />
          </div>
          <div>
            <span>Value: {second}</span>
            <Slider
              min={0}
              max={77}
              value={second}
              onChange={(val) => onChange([first, val])}
              disabled
            />
          </div>
        </div>
      )}
    </Container>
  ));