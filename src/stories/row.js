import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { Row, Col } from '../ui';

const Dummy = ({ text = 'Column' }) => (<div style={{ padding: '8px', backgroundColor: '#f0f0f0' }}>{text}</div>)

storiesOf('Row', module)
  .add('common', () => (
    <Container>
      {() => (
        <Row>
          <Col><Dummy /></Col>
          <Col><Dummy /></Col>
          <Col><Dummy /></Col>
          <Col><Dummy /></Col>
          <Col><Dummy /></Col>
        </Row>
      )}
    </Container>
  ))
  .add('gutter', () => (
    <Container>
      {() => (
        <Row gutter>
          <Col><Dummy /></Col>
          <Col><Dummy /></Col>
          <Col><Dummy /></Col>
          <Col><Dummy /></Col>
          <Col><Dummy /></Col>
        </Row>
      )}
    </Container>
  ))
  .add('gutter small', () => (
    <Container>
      {() => (
        <Row gutter="small">
          <Col><Dummy /></Col>
          <Col><Dummy /></Col>
          <Col><Dummy /></Col>
          <Col><Dummy /></Col>
          <Col><Dummy /></Col>
        </Row>
      )}
    </Container>
  ))
  .add('custom width', () => (
    <Container>
      {() => (
        <Row gutter>
          <Col width="10"><Dummy /></Col>
          <Col width="20"><Dummy /></Col>
          <Col width="30"><Dummy /></Col>
          <Col width="40"><Dummy /></Col>
        </Row>
      )}
    </Container>
  ))
  .add('auto width', () => (
    <Container>
      {() => (
        <Row gutter>
          <Col auto><Dummy text="Lorem ipsum dolor sit amet"/></Col>
          <Col auto><Dummy text="Consectetur" /></Col>
          <Col auto><Dummy text="Ut enim ad minim veniam adipisicing elit" /></Col>
        </Row>
      )}
    </Container>
  ))
