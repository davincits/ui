import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { Button } from '../ui';

storiesOf('Button', module)
  .add('common', () => (
    <Container>
      {() => <Button onClick={action('clicked')}>Hello Button</Button>}
    </Container>
  ))
  .add('uppercase', () => (
    <Container>
      {() => <Button onClick={action('clicked')} uppercase>Hello Button</Button>}
    </Container>
  ))
  .add('block', () => (
    <Container>
      {() => <Button onClick={action('clicked')} block>Hello Button</Button>}
    </Container>
  ))
  .add('loading', () => (
    <Container>
      {() => <Button onClick={action('clicked')} loading>Hello Button</Button>}
    </Container>
  ))
  .add('unbordered', () => (
    <Container>
      {() => <Button onClick={action('clicked')} unbordered>Hello Button</Button>}
    </Container>
  ))
  .add('small', () => (
    <Container>
      {() => <Button onClick={action('clicked')} small>Hello Button</Button>}
    </Container>
  ))
  .add('primary', () => (
    <Container>
      {() => <Button onClick={action('clicked')} primary>Hello Button</Button>}
    </Container>
  ))
  .add('danger', () => (
    <Container>
      {() => <Button onClick={action('clicked')} danger>Hello Button</Button>}
    </Container>
  ))
  .add('blue', () => (
    <Container>
      {() => <Button onClick={action('clicked')} blue>Hello Button</Button>}
    </Container>
  ))
  .add('disabled', () => (
    <Container>
      {() => <Button onClick={action('clicked')} disabled>Hello Button</Button>}
    </Container>
  ));