import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { LoadingDotted, LoadingSpinner } from '../components';

storiesOf('Misc', module)
  .add('LoadingDotted', () => (
    <Container>
      {() => (<LoadingDotted />)}
    </Container>
  ))
  .add('LoadingSpinner', () => (
    <Container>
      {() => (<LoadingSpinner />)}
    </Container>
  ))
