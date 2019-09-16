import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import {
  ToastrContainer,
  Toast,
  ToastInfo,
  ToastSuccess,
  ToastWarning,
  ToastDanger,
  Button,
  Row,
  Col,
} from '../components';

storiesOf('Toasts', module)
  .addDecorator(story => (
    <Container>
      {() => (
        <div>
          {story()}
          <ToastrContainer />
        </div>
      )}
    </Container>
  ))
  .add('common', () => (
    <Container>
      {() => (
        <Row gutter>
          <Col auto>
            <Button onClick={() => {
              Toast({ title: 'Title', message: 'message' })
            }}>
              Common
            </Button>
          </Col>
          <Col auto>
            <Button onClick={() => {
              ToastInfo({ title: 'Title', message: 'message' })
            }}>
              Info
            </Button>
          </Col>
          <Col auto>
            <Button onClick={() => {
              ToastSuccess({ title: 'Title', message: 'message' })
            }}>
              Success
            </Button>
          </Col>
          <Col auto>
            <Button onClick={() => {
              ToastWarning({ title: 'Title', message: 'message' })
            }}>
              Warning
            </Button>
          </Col>
          <Col auto>
            <Button onClick={() => {
              ToastDanger({ title: 'Title', message: 'message' })
            }}>
              Danger
            </Button>
          </Col>
          <Col auto>
            <Button onClick={() => {
              Toast({ title: 'Title', message: 'message', delay: 1000 })
            }}>
              Custom delay (1000ms)
            </Button>
          </Col>
          <Col auto>
            <Button onClick={() => {
              Toast({ title: 'Title', message: 'message', delay: 0 })
            }}>
              Without delay
            </Button>
          </Col>
          <Col auto>
            <Button onClick={() => {
              Toast({ title: 'Title', message: 'message', closeElement: (<Button small>Close</Button>) })
            }}>
              With button
            </Button>
          </Col>
          <Col auto>
            <Button onClick={() => {
              Toast({ title: 'Title', message: 'message', closeElement: '[Click me to close]' })
            }}>
              Custom close
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  ))