import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { LoadingDotted, LoadingSpinner } from '../ui';

storiesOf('Misc', module)
  .add('LoadingDotted', () => (
    <Container>
      {() => (<LoadingDotted />)}
    </Container>
  ))
  .add('unclosable', () => (
    <Container>
      {() => (<LoadingSpinner />)}
    </Container>
  ))
