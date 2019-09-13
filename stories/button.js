import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { Button, Row, Col } from '../src';

const onClick = action('clicked');

storiesOf('Button', module)
  .add('common', () => (
    <Container>
      {() => (
        <Row gutter>
          <Col auto>
            <Button onClick={onClick}>Common Button</Button>
          </Col>
        </Row>
      )}
    </Container>
  ))
  .add('filled', () => (
    <Container>
      {() => (
        <div>
          <Row gutter style={{ width: '680px', margin: '24px 0' }}>
            <Col>
              <Button onClick={onClick} block primary>Primary Button</Button>
            </Col>
            <Col>
              <Button onClick={onClick} block danger>Danger Button</Button>
            </Col>
            <Col>
              <Button onClick={onClick} block success>Success Button</Button>
            </Col>
            <Col>
              <Button onClick={onClick} block warning>Warning Button</Button>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  ))
  .add('stroke', () => (
    <Container>
      {() => (
        <div>
          <Row gutter style={{ width: '680px', margin: '24px 0' }}>
            <Col>
              <Button onClick={onClick} block stroke primary>Primary Button</Button>
            </Col>
            <Col>
              <Button onClick={onClick} block stroke danger>Danger Button</Button>
            </Col>
            <Col>
              <Button onClick={onClick} block stroke success>Success Button</Button>
            </Col>
            <Col>
              <Button onClick={onClick} block stroke warning>Warning Button</Button>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  ))
  .add('large', () => (
    <Container>
      {() => (
        <Row gutter>
          <Col auto>
            <Button onClick={onClick} large>Large Button</Button>
          </Col>
        </Row>
      )}
    </Container>
  ))
  .add('small', () => (
    <Container>
      {() => (
        <Row gutter>
          <Col auto>
            <Button onClick={onClick} small>Small Button</Button>
          </Col>
        </Row>
      )}
    </Container>
  ))
  .add('uppercase', () => (
    <Container>
      {() => (
        <Row gutter>
          <Col auto>
            <Button onClick={onClick} uppercase>Uppercase Button</Button>
          </Col>
        </Row>
      )}
    </Container>
  ))
  .add('block', () => (
    <Container>
      {() => (
        <div>
          <Button onClick={onClick} block>Full width Button</Button>
        </div>
      )}
    </Container>
  ))
  .add('unbordered', () => (
    <Container>
      {() => (
        <Row gutter>
          <Col auto>
            <Button onClick={onClick} unbordered>Unbordered Button</Button>
          </Col>
        </Row>
      )}
    </Container>
  ))
  .add('loading', () => (
    <Container>
      {() => (
        <Row gutter>
          <Col auto>
            <Button onClick={onClick} loading>Loading Button</Button>
          </Col>
        </Row>
      )}
    </Container>
  ))
  .add('disabled', () => (
    <Container>
      {() => <Button onClick={onClick} disabled>Hello Button</Button>}
    </Container>
  ));
