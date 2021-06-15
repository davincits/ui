import React from "react";
import { storiesOf } from "../utils";
import Container from "./Container";
import { TagsField } from "../../components";

storiesOf("TagsField")
  .add("common", () => (
    <Container width="480px">
      {({ value, onChange }) => (
        <TagsField
          label="Tags"
          value={value}
          onChange={onChange} />
      )}
    </Container>
  ))
  .add("predefined", () => (
    <Container width="480px">
      {({ value = ["Brno", "Ostrave", "Plzen", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odio consequuntur id alias magni recusandae molestias rem assumenda laboriosam ad, eos inventore quasi repellat quibusdam possimus error suscipit, perferendis ipsam"], onChange }) => (
        <TagsField
          label="Tags"
          value={value}
          onChange={onChange} />
      )}
    </Container>
  ))
  .add("disabled", () => (
    <Container width="480px">
      {({ value = ["Brno", "Ostrave", "Plzen"], onChange }) => (
        <>
          <TagsField
            label="Tags"
            value={value}
            onChange={onChange}
            disabled />
          <div style={{ marginTop: 16 }}>
            <TagsField
              label="Tags"
              disabled />
          </div>
        </>
      )}
    </Container>
  ));
