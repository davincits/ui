import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { Alert } from '../ui';

storiesOf('Alert', module)
  .add('common', () => (
    <Container>
      {() => (
        <div style={{ background: '#f0f0f0', padding: '16px' }}>
          <Alert>
            <span className="ui-text-danger"><strong>Warning! </strong></span>
            <span>There will be an important message from Davinci, which can be read and hidden. Messages may contain </span>
            <a href="https://google.com">links</a>
          </Alert>
        </div>
      )}
    </Container>
  ))
  .add('unclosable', () => (
    <Container>
      {() => (
        <div style={{ background: '#f0f0f0', padding: '16px' }}>
          <Alert closeable={false}>
            <span className="ui-text-danger"><strong>Warning! </strong></span>
            <span>There will be an important message from Davinci, which can be read and hidden. Messages may contain </span>
            <a href="https://google.com">links</a>
          </Alert>
        </div>
      )}
    </Container>
  ))