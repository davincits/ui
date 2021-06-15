import React from "react";

import { storiesOf } from "../utils";
import Container from "./Container";
import { Datepicker, Button } from "../../components";
import IconCalendar from "../../components/icons/Calendar";

storiesOf("Date picker")
  .add("common", () => (
    <Container>
      {({ value = "", onChange }) => (
        <div>
          <Datepicker
            onChange={onChange}
            value={value} />
          <Datepicker onChange={onChange} value={value} view={Datepicker.MONTHES_VIEW} />
          <Datepicker onChange={onChange} value={value} view={Datepicker.YEARS_VIEW} />
          <Datepicker
            onChange={onChange}
            value={value}
            withoutDate />
          <p>Selected date: {value}</p>
        </div>
      )}
    </Container>
  ))
  .add("button", () => (
    <Container>
      {({ value = "", onChange }) => (
        <Datepicker
          label={(
            <Button>
              <IconCalendar />
              {value || "Select a date"}
            </Button>
          )}
          onChange={onChange}
          value={value} />
      )}
    </Container>
  ))
  .add("range", () => (
    <Container>
      {({ value = [], onChange }) => (
        <div>
          <div className="u-flex">
            <Datepicker
              onChange={onChange}
              value={value}
              range />
            <div className="u-pull-right">
              <Datepicker
                onChange={onChange}
                value={value}
                range />
            </div>
          </div>
          <p>Selected range: {value.join(" / ")}</p>
        </div>
      )}
    </Container>
  ))
  .add("allowed dates", () => (
    <Container>
      {({ value: [value, rangeValue] = ["", []], onChange }) => (
        <div>
          <Datepicker
            label={(
              <Button>
                <IconCalendar />
                {value || "Select a date"}
              </Button>
            )}
            onChange={(val) => onChange([val, rangeValue])}
            isDateAllowed={({ year, month, date }) => new Date(year, month, date) > Date.now()}
            isMonthAllowed={({ year, month }) => new Date(year, month + 1) > Date.now()}
            isYearAllowed={({ year }) => new Date(year + 1) > Date.now()}
            value={value} />
          <br />
          <Datepicker
            label={(
              <Button>
                <IconCalendar />
                {rangeValue.length ? rangeValue.join(", ") : "Select a date"}
              </Button>
            )}
            onChange={(val) => onChange([value, val])}
            isDateAllowed={({ year, month, date }) => new Date(year, month, date) > Date.now()}
            isMonthAllowed={({ year, month }) => new Date(year, month + 1) > Date.now()}
            isYearAllowed={({ year }) => new Date(year + 1) > Date.now()}
            value={rangeValue}
            range />
        </div>
      )}
    </Container>
  ))
  .add("disabled", () => (
    <Container>
      {({ value = "", onChange }) => (
        <div>
          <Datepicker
            onChange={onChange}
            value={value}
            disabled />
        </div>
      )}
    </Container>
  ));
