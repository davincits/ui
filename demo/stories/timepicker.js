import React from "react";

import { storiesOf } from "../utils";
import Container from "./Container";
import { Timepicker, Button } from "../../components";
import IconCalendar from "../../components/icons/Calendar";

storiesOf("Time picker", module)
  .add("common", () => (
    <Container>
      {({ value = "", onChange }) => (
        <div>
          <Timepicker
            onChange={onChange}
            value={value}
          />
          <p>Selected time: {value}</p>
        </div>
      )}
    </Container>
  ))
  .add("disabled", () => (
    <Container>
      {({ value = "", onChange }) => (
        <div>
          <Timepicker
            onChange={onChange}
            value={value}
            disabled
          />
          <p>Selected time: {value}</p>
        </div>
      )}
    </Container>
  ))
  .add("allowed time", () => (
    <Container>
      {({ value = "", onChange }) => (
        <Timepicker
          label={(
            <Button>
              <IconCalendar />
              {value || "Select a time"}
            </Button>
          )}
          // from 7:30 to 18:45
          allowedTime="7:30-13:00;14:00-18:45"
          onChange={onChange}
          value={value}
        />
      )}
    </Container>
  ))
  .add("button", () => (
    <Container>
      {({ value = "", onChange }) => (
        <Timepicker
          label={(
            <Button>
              <IconCalendar />
              {value || "Select a time"}
            </Button>
          )}
          onChange={onChange}
          value={value}
        />
      )}
    </Container>
  ));
