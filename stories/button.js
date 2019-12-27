import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { Button, Row, Col } from '../components';


storiesOf('Button', module)
  .add('common', () => (
    <Container>
      {() => (
        <Row gutter>
          <Col auto>
            <Button onClick={console.log}>Common Button</Button>
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
              <Button onClick={console.log} block primary>Primary Button</Button>
            </Col>
            <Col>
              <Button onClick={console.log} block danger>Danger Button</Button>
            </Col>
            <Col>
              <Button onClick={console.log} block success>Success Button</Button>
            </Col>
            <Col>
              <Button onClick={console.log} block warning>Warning Button</Button>
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
              <Button onClick={console.log} block stroke primary>Primary Button</Button>
            </Col>
            <Col>
              <Button onClick={console.log} block stroke danger>Danger Button</Button>
            </Col>
            <Col>
              <Button onClick={console.log} block stroke success>Success Button</Button>
            </Col>
            <Col>
              <Button onClick={console.log} block stroke warning>Warning Button</Button>
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
            <Button onClick={console.log} large>Large Button</Button>
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
            <Button onClick={console.log} small>Small Button</Button>
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
            <Button onClick={console.log} uppercase>Uppercase Button</Button>
          </Col>
        </Row>
      )}
    </Container>
  ))
  .add('block', () => (
    <Container>
      {() => (
        <div>
          <Button onClick={console.log} block>Full width Button</Button>
        </div>
      )}
    </Container>
  ))
  .add('unbordered', () => (
    <Container>
      {() => (
        <Row gutter>
          <Col auto>
            <Button onClick={console.log} unbordered>Unbordered Button</Button>
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
            <Button onClick={console.log} loading>Loading Button</Button>
          </Col>
        </Row>
      )}
    </Container>
  ))
  .add('disabled', () => (
    <Container>
      {() => <Button onClick={console.log} disabled>Hello Button</Button>}
    </Container>
  ))
  .add('focused', () => (
    <Container>
      {() => <Button onClick={console.log} focused>Hello Button</Button>}
    </Container>
  ))
  .add('hovered', () => (
    <Container>
      {() => <Button onClick={console.log} hovered>Hello Button</Button>}
    </Container>
  ));
