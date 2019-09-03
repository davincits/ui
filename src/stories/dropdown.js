import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { DropDown, Row, Col, Button } from '../ui';

storiesOf('DropDown', module)
  .add('common', () => (
    <Container>
      {() => (
        <Row gutter>
          <Col>
            <DropDown buttonContent="Click me">
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </DropDown>
          </Col>
          <Col>
            <DropDown buttonContent="Click me">
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </DropDown>
          </Col>
          <Col>
            <DropDown buttonContent="Click me">
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </DropDown>
          </Col>
          <Col>
            <DropDown buttonContent="Click me">
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </DropDown>
          </Col>
        </Row>
      )}
    </Container>
  ))
  .add('outline', () => (
    <Container>
      {() => (
        <Row gutter>
          <Col>
            <DropDown buttonContent="Click me" inline={false}>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </DropDown>
          </Col>
          <Col>
            <DropDown buttonContent="Click me" inline={false}>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </DropDown>
          </Col>
          <Col>
            <DropDown buttonContent="Click me" inline={false}>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </DropDown>
          </Col>
          <Col>
            <DropDown buttonContent="Click me" inline={false}>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </DropDown>
          </Col>
        </Row>
      )}
    </Container>
  ))
  .add('custom', () => (
    <Container>
      {() => (
        <Row gutter>
          <Col>
            <DropDown button={<Button>Custom button</Button>}>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </DropDown>
          </Col>
          <Col>
            <DropDown button={<Button primary>Custom button</Button>}>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </DropDown>
          </Col>
          <Col>
            <DropDown button={<Button unbordered>Custom button</Button>}>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </DropDown>
          </Col>
          <Col>
            <DropDown button={<Button danger>Custom button</Button>}>
              <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
            </DropDown>
          </Col>
        </Row>
      )}
    </Container>
  ))