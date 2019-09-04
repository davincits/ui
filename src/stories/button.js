import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { Button } from '../ui';

const onClick = action('clicked');

storiesOf('Button', module)
  .add('common', () => (
    <Container>
      {() => <Button onClick={onClick}>Hello Button</Button>}
    </Container>
  ))
  .add('uppercase', () => (
    <Container>
      {() => <Button onClick={onClick} uppercase>Hello Button</Button>}
    </Container>
  ))
  .add('block', () => (
    <Container>
      {() => <Button onClick={onClick} block>Hello Button</Button>}
    </Container>
  ))
  .add('loading', () => (
    <Container>
      {() => <Button onClick={onClick} loading>Hello Button</Button>}
    </Container>
  ))
  .add('unbordered', () => (
    <Container>
      {() => <Button onClick={onClick} unbordered>Hello Button</Button>}
    </Container>
  ))
  .add('small', () => (
    <Container>
      {() => <Button onClick={onClick} small>Hello Button</Button>}
    </Container>
  ))
  .add('primary', () => (
    <Container>
      {() => <Button onClick={onClick} primary>Hello Button</Button>}
    </Container>
  ))
  .add('danger', () => (
    <Container>
      {() => <Button onClick={onClick} danger>Hello Button</Button>}
    </Container>
  ))
  .add('blue', () => (
    <Container>
      {() => <Button onClick={onClick} blue>Hello Button</Button>}
    </Container>
  ))
  .add('disabled', () => (
    <Container>
      {() => <Button onClick={onClick} disabled>Hello Button</Button>}
    </Container>
  ));