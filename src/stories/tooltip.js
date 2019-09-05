import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { Tooltip } from '../ui';

storiesOf('Tooltip', module)
  .add('common', () => (
    <Container>
      {() => (
        <div style={{ padding: '50px', textAlign: 'center', display: 'flex' }}>
          <Tooltip tooltip="Lorem ipsum dolor sit amet...">
            <div style={{ border: '1px solid #f0f0f0', borderRadius: '2px', padding: '4px', margin: '4px' }}>Simple tooltip</div>
          </Tooltip>
          <Tooltip tooltip={`Lorem ipsum dolor sit amet, consectetur\nadipisicing elit, sed do eiusmod tempor\nincididunt ut labore et dolore magna aliqua`}>
            <div style={{ border: '1px solid #f0f0f0', borderRadius: '2px', padding: '4px', margin: '4px' }}>Multiline tooltip</div>
          </Tooltip>
        </div>
      )}
    </Container>
  ))