import "./style.scss";

import React, { memo, useCallback, useState, useEffect, useMemo } from "react";
import { Button, TextField } from "..";
import IconChevronDown from "../icons/ChevronDown";
import IconChevronUp from "../icons/ChevronUp";
import { isString } from "../utils";
// import Label from "./Label";

const DEFAULT_STATE = { hours: "00", minutes: "00" };
const MAX_HOURS_VALUE = 23;
const MAX_MINUTES_VALUE = 59;
const HOURS = "hours";
const MINUTES = "minutes";
const MAX_VALUES = {
  [HOURS]: MAX_HOURS_VALUE,
  [MINUTES]: MAX_MINUTES_VALUE,
};

const parseAloowedTimeString = (string) => string.split(";")
  .map((pair) => pair.split("-").map((str) => str.split(":").map((num) => parseInt(num, 10))));
const isTimeAllowed = ({ hours: _h, minutes: _m }, a) => (!a || a.some(([[h1, m1], [h2, m2]]) => {
  if (_m === null) {
    return (_h >= h1) && (_h <= h2);
  }
  return ((_h === h1) ? (_m >= m1) : (_h > h1)) && ((_h === h2) ? (_m <= m2) : (_h < h2));
}));

const pad = (val) => String(val).padStart(2, 0);

const Datepicker = memo(({ value, allowedTime = "", onChange }) => {
  const [rootState, setState] = useState(() => {
    if (!value || !isString(value)) {
      return DEFAULT_STATE;
    }
    const [str1, str2] = value.split(":").map((val) => pad(val));
    return { hours: str1, minutes: str2 };
  });
  const { hours, minutes } = rootState;
  const allowedTimeParsed = useMemo(() => allowedTime && parseAloowedTimeString(allowedTime), [allowedTime]);
  const hasError = useMemo(() => {
    return !isTimeAllowed(
      { hours: Number(hours), minutes: Number(minutes) },
      allowedTimeParsed,
    );
  }, [allowedTimeParsed, hours, minutes]);

  const handleInputChange = useCallback((newValue, { target: { name } }) => {
    if (!newValue) {
      setState((state) => ({ ...state, [name]: "" }));
      return;
    }
    let result = Number(newValue);
    if (isNaN(result)) return;
    if (result < 0) result = 0;
    if (result > MAX_VALUES[name]) result = MAX_VALUES[name];
    setState((state) => ({ ...state, [name]: result }));
  }, []);

  const handleFieldBlur = useCallback((val, { target: { name } }) => {
    setState((state) => ({ ...state, [name]: pad(state[name]) }));
  }, []);

  const getButtonClickHandler = useCallback((inc) => (event, name) => {
    let result = Number(rootState[name]) + inc;
    if (isNaN(result)) return;
    if (result < 0) result = 0;
    if (result > MAX_VALUES[name]) result = MAX_VALUES[name];
    setState((state) => ({ ...state, [name]: pad(result) }));
  }, [rootState]);

  useEffect(() => {
    if (!hours || !minutes) return;
    onChange(`${pad(hours)}:${pad(minutes)}`);
  }, [hours, minutes, onChange]);

  return (
    <div className="ui-timepicker-content">
      <div className="ui-timepicker-control">
        <Button onClick={getButtonClickHandler(1)} name={HOURS}>
          <IconChevronUp />
        </Button>
        <Button onClick={getButtonClickHandler(1)} name={MINUTES}>
          <IconChevronUp />
        </Button>
      </div>
      <div className="ui-timepicker-text-fields">
        <TextField
          name={HOURS}
          maxLength={2}
          value={hours}
          error={hasError}
          onChange={handleInputChange}
          onBlur={handleFieldBlur} />
        <div className="ui-timepicker-separator">:</div>
        <TextField
          name={MINUTES}
          maxLength={2}
          value={minutes}
          error={hasError}
          onChange={handleInputChange}
          onBlur={handleFieldBlur} />
      </div>
      <div className="ui-timepicker-control">
        <Button onClick={getButtonClickHandler(-1)} name={HOURS}>
          <IconChevronDown />
        </Button>
        <Button onClick={getButtonClickHandler(-1)} name={MINUTES}>
          <IconChevronDown />
        </Button>
      </div>
    </div>
  );
});

export default Datepicker;
