import React from "react";

import { storiesOf } from "../utils";
import Container from "./Container";
import { CheckBox } from "../../components";

storiesOf("CheckBox")
  .add("common", () => (
    <Container>
      {({ value: [v1, v2, v3, v4] = [false, true, false, true], onChange }) => (
        <div className="u-flex">
          <div className="u-padded">
            <CheckBox
              label="Input label"
              value={v1}
              onChange={(v) => onChange([v, v2, v3, v4])} />
            <CheckBox
              label="Input label"
              indeterminate />
            <CheckBox
              label="Input label"
              value={v2}
              onChange={(v) => onChange([v1, v, v3, v4])} />
            <CheckBox
              label="Input label"
              value={v3}
              onChange={(v) => onChange([v1, v2, v, v4])}
              disabled />
            <CheckBox
              label="Input label"
              indeterminate
              disabled />
            <CheckBox
              label="Input label"
              value={v4}
              onChange={(v) => onChange([v1, v2, v3, v])}
              disabled />
          </div>
          <div className="u-padded">
            <CheckBox
              label="Input label"
              value={v1}
              tumbler
              onChange={(v) => onChange([v, v2, v3, v4])} />
            <CheckBox
              label="Input label"
              tumbler
              indeterminate />
            <CheckBox
              label="Input label"
              value={v2}
              tumbler
              onChange={(v) => onChange([v1, v, v3, v4])} />
            <CheckBox
              label="Input label"
              value={v3}
              tumbler
              onChange={(v) => onChange([v1, v2, v, v4])}
              disabled />
            <CheckBox
              label="Input label"
              indeterminate
              tumbler
              disabled />
            <CheckBox
              label="Input label"
              value={v4}
              tumbler
              onChange={(v) => onChange([v1, v2, v3, v])}
              disabled />
          </div>
        </div>
      )}
    </Container>
  ));
