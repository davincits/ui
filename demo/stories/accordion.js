import React from "react";

import { storiesOf } from "../utils";
import Container from "./Container";
import { Accordion } from "../../components";

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

storiesOf("Accordion", module)
  .add("common", () => (
    <Container width="560px">
      {() => (
        <Accordion>
          <Accordion.Toggle>
            <Accordion.Title>Meeting space characteristics</Accordion.Title>
          </Accordion.Toggle>
          <Accordion.Collapse animated>
            <div className="u-padding-top u-padding-bottom">{LOREM}</div>
          </Accordion.Collapse>
          <Accordion.Toggle>
            <Accordion.Title>Catering Services</Accordion.Title>
          </Accordion.Toggle>
          <Accordion.Collapse animated>
            <div className="u-padding-top u-padding-bottom">{LOREM}</div>
          </Accordion.Collapse>
          <Accordion.Toggle>
            <Accordion.Title>Conference equipment</Accordion.Title>
          </Accordion.Toggle>
          <Accordion.Collapse animated>
            <div className="u-padding-top u-padding-bottom">{LOREM}</div>
          </Accordion.Collapse>
          <Accordion.Toggle disabled>
            <Accordion.Title>Comment</Accordion.Title>
          </Accordion.Toggle>
          <Accordion.Collapse animated>
            <div className="u-padding-top u-padding-bottom">{LOREM}</div>
          </Accordion.Collapse>
        </Accordion>
      )}
    </Container>
  ));
