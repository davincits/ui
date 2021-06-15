import React from "react";

import { storiesOf } from "../utils";
import Container from "./Container";
import { MultiSelect } from "../../components";
import LIST from "./mocks/users_list.json";
import LIST_24 from "./mocks/users_list_img_24.json";
import LIST_40 from "./mocks/users_list_img_40.json";

const USERS = LIST.map((user) => ({ ...user, value: user.id }));
const USERS_WITH_ICON = LIST_24.map((user) => ({ ...user, value: user.id }));
const USERS_WITH_LARGE_ICON = LIST_40.map((user) => ({ ...user, value: user.id }));

storiesOf("MultiSelect")
  .add("common", () => (
    <Container>
      {({ value, onChange }) => (
        <div style={{ width: "240px" }}>
          <MultiSelect
            label="Input label"
            value={value}
            options={USERS}
            onChange={onChange} />
        </div>
      )}
    </Container>
  ))
  .add("with image", () => (
    <Container>
      {({ value, onChange }) => (
        <div style={{ width: "240px" }}>
          <MultiSelect
            label="Input label"
            value={value}
            options={USERS_WITH_ICON}
            onChange={onChange} />
        </div>
      )}
    </Container>
  ))
  .add("with large image", () => (
    <Container>
      {({ value, onChange }) => (
        <div style={{ width: "260px" }}>
          <MultiSelect
            label="Input label"
            value={value}
            options={USERS_WITH_LARGE_ICON}
            imageSize="large"
            onChange={onChange} />
        </div>
      )}
    </Container>
  ))
  .add("with search", () => (
    <Container>
      {({ value, onChange }) => (
        <div style={{ width: "280px" }}>
          <MultiSelect
            label="Input label"
            value={value}
            options={USERS_WITH_ICON}
            onChange={onChange}
            search />
        </div>
      )}
    </Container>
  ))
  .add("with error", () => (
    <Container>
      {({ value, onChange }) => (
        <div style={{ width: "280px" }}>
          <MultiSelect
            label="Input label"
            error="Some error text"
            value={value}
            options={USERS_WITH_ICON}
            onChange={onChange}
            search />
        </div>
      )}
    </Container>
  ))
  .add("disabled", () => (
    <Container>
      {({ value, onChange }) => (
        <div style={{ width: "280px" }}>
          <MultiSelect
            label="Input label"
            value={value}
            options={USERS_WITH_ICON}
            onChange={onChange}
            disabled />
        </div>
      )}
    </Container>
  ));
