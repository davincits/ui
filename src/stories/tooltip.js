import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { Tooltip } from '../ui';

storiesOf('Tooltip', module)
  .add('common', () => (
    <Container>
      {() => (
        <div style={{ padding: '16px 50px' }}>
          <Tooltip tooltip="Lorem ipsum dolor sit amet">
            Hover me
          </Tooltip>
        </div>
      )}
    </Container>
  ))