import React from "react";

import { storiesOf } from "../utils";
import Container from "./Container";
import {
  DropDown, Row, Col, Button,
} from "../../components";

storiesOf("DropDown")
  .add("common", () => (
    <Container>
      {() => (
        <div style={{ width: "240px" }}>
          <div>
            <DropDown buttonContent="Click me">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </DropDown>
          </div>
          <div className="u-margin-top">
            <DropDown buttonContent="Click me">
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </DropDown>
          </div>
          <div className="u-margin-top">
            <DropDown buttonContent="Click me">
              {() => (
                <div>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                  sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              )}
            </DropDown>
          </div>
          <div className="u-margin-top">
            <DropDown buttonContent="Click me" disabled>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </DropDown>
          </div>
        </div>
      )}
    </Container>
  ))
  .add("outline", () => (
    <Container>
      {() => (
        <div style={{ width: "240px" }}>
          <div>
            <DropDown buttonContent="Click me" inline={false}>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </DropDown>
          </div>
          <div className="u-margin-top">
            <DropDown buttonContent="Click me" inline={false}>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </DropDown>
          </div>
          <div className="u-margin-top">
            <DropDown buttonContent="Click me" inline={false}>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </DropDown>
          </div>
          <div className="u-margin-top">
            <DropDown buttonContent="Click me" inline={false}>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </DropDown>
          </div>
        </div>
      )}
    </Container>
  ))
  .add("custom", () => (
    <Container>
      {() => (
        <Row gutter>
          <Col>
            <DropDown button={<Button>Custom button</Button>}>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </DropDown>
          </Col>
          <Col>
            <DropDown button={<Button primary>Custom button</Button>}>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </DropDown>
          </Col>
          <Col>
            <DropDown button={<Button unbordered>Custom button</Button>}>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </DropDown>
          </Col>
          <Col>
            <DropDown button={<Button danger>Custom button</Button>}>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </DropDown>
          </Col>
        </Row>
      )}
    </Container>
  ));
