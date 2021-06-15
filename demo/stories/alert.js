import React from "react";

import { storiesOf } from "../utils";
import Container from "./Container";
import { Alert } from "../../components";

const LOREM = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

storiesOf("Alert")
  .add("common", () => (
    <Container>
      {() => (
        <div>
          <Alert className="u-margin-top">{LOREM}</Alert>
          <Alert className="u-margin-top">{LOREM}</Alert>
          <Alert className="u-margin-top">{LOREM}</Alert>
        </div>
      )}
    </Container>
  ));
