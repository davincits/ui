/* eslint-disable react/jsx-no-literals */
import React from "react";

import { storiesOf } from "../utils";
import Container from "./Container";
import { Button, Row, Col } from "../../components";

const handleClick = (event, name) => console.log({ event, name });

storiesOf("Button")
  .add("common", () => (
    <Container>
      {() => (
        <Row gutter>
          <Col auto>
            <Button onClick={handleClick} name="lorem">Common Button</Button>
          </Col>
        </Row>
      )}
    </Container>
  ))
  .add("filled", () => (
    <Container>
      {() => (
        <div>
          <Row gutter style={{ width: "680px", margin: "24px 0" }}>
            <Col>
              <Button onClick={handleClick} block primary>Primary Button</Button>
            </Col>
            <Col>
              <Button onClick={handleClick} block danger>Danger Button</Button>
            </Col>
            <Col>
              <Button onClick={handleClick} block success>Success Button</Button>
            </Col>
            <Col>
              <Button onClick={handleClick} block warning>Warning Button</Button>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  ))
  .add("stroke", () => (
    <Container>
      {() => (
        <div>
          <Row gutter style={{ width: "680px", margin: "24px 0" }}>
            <Col>
              <Button onClick={handleClick} block stroke primary>Primary Button</Button>
            </Col>
            <Col>
              <Button onClick={handleClick} block stroke danger>Danger Button</Button>
            </Col>
            <Col>
              <Button onClick={handleClick} block stroke success>Success Button</Button>
            </Col>
            <Col>
              <Button onClick={handleClick} block stroke warning>Warning Button</Button>
            </Col>
          </Row>
        </div>
      )}
    </Container>
  ))
  .add("large", () => (
    <Container>
      {() => (
        <Row gutter>
          <Col auto>
            <Button onClick={handleClick} large>Large Button</Button>
          </Col>
        </Row>
      )}
    </Container>
  ))
  .add("small", () => (
    <Container>
      {() => (
        <Row gutter>
          <Col auto>
            <Button onClick={handleClick} small>Small Button</Button>
          </Col>
        </Row>
      )}
    </Container>
  ))
  .add("uppercase", () => (
    <Container>
      {() => (
        <Row gutter>
          <Col auto>
            <Button onClick={handleClick} uppercase>Uppercase Button</Button>
          </Col>
        </Row>
      )}
    </Container>
  ))
  .add("block", () => (
    <Container>
      {() => (
        <div>
          <Button onClick={handleClick} block>Full width Button</Button>
        </div>
      )}
    </Container>
  ))
  .add("unbordered", () => (
    <Container>
      {() => (
        <Row gutter>
          <Col auto>
            <Button onClick={handleClick} unbordered>Unbordered Button</Button>
          </Col>
        </Row>
      )}
    </Container>
  ))
  .add("loading", () => (
    <Container>
      {() => (
        <Row gutter>
          <Col auto>
            <Button onClick={handleClick} loading>Loading Button</Button>
          </Col>
        </Row>
      )}
    </Container>
  ))
  .add("disabled", () => (
    <Container>
      {() => <Button onClick={handleClick} disabled>Hello Button</Button>}
    </Container>
  ))
  .add("focused", () => (
    <Container>
      {() => <Button onClick={handleClick} focused>Hello Button</Button>}
    </Container>
  ))
  .add("hovered", () => (
    <Container>
      {() => <Button onClick={handleClick} hovered>Hello Button</Button>}
    </Container>
  ));
