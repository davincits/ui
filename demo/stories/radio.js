import React from "react";

import { storiesOf } from "../utils";
import Container from "./Container";
import { RadioGroup, Radio } from "../../components";

storiesOf("Radio")
  .add("common", () => (
    <Container>
      {({ value = 2, onChange }) => (
        <RadioGroup
          onChange={onChange}
          value={value}>
          <Radio value={1}>Input label #1</Radio>
          <Radio value={2}>Input label #2</Radio>
          <Radio value={3}>Input label #3</Radio>
        </RadioGroup>
      )}
    </Container>
  ))
  .add("disabled", () => (
    <Container>
      {({ value = 2, onChange }) => (
        <RadioGroup
          onChange={onChange}
          value={value}>
          <Radio value={1}>Input label #1</Radio>
          <Radio value={2}>Input label #2</Radio>
          <Radio value={3} disabled>Input label #3</Radio>
        </RadioGroup>
      )}
    </Container>
  ))
  .add("disabled all", () => (
    <Container>
      {({ value = 2, onChange }) => (
        <RadioGroup
          onChange={onChange}
          value={value}
          disabled>
          <Radio value={1}>Input label #1</Radio>
          <Radio value={2}>Input label #2</Radio>
          <Radio value={3}>Input label #3</Radio>
        </RadioGroup>
      )}
    </Container>
  ));
