import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { Tooltip } from '../ui';

storiesOf('Tooltip', module)
  .add('common', () => (
    <Container>
      {() => (
        <div style={{ padding: '16px 50px', width: '180px', textAlign: 'center' }}>
          <Tooltip tooltip="Lorem ipsum dolor sit amet...">
            <div style={{ border: '1px solid #dcdcdc', borderRadius: '4px', padding: '8px' }}>Hover me</div>
          </Tooltip>
        </div>
      )}
    </Container>
  ))