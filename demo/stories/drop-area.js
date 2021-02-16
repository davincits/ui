import React from "react";

import { storiesOf } from "../utils";
import Container from "./Container";
import { DropArea } from "../../components";

storiesOf("DropArea", module)
  .add("common", () => (
    <Container>
      {({ onChange }) => (
        <div style={{ padding: "16px", display: "flex" }}>
          <DropArea onChange={console.log}>
            <div style={{ padding: "50px" }}>Drag file to this area</div>
          </DropArea>
        </div>
      )}
    </Container>
  ));
