import "./style.scss";

import React, { memo, useCallback, useMemo, useRef } from "react";

import { CLASS_NAME_BASE, CLASS_NAME_DISABLED } from "../constants";
import { classNames } from "../utils";
import Select from "../Select";

const CLASS_NAME = `${CLASS_NAME_BASE} ui-timepicker`;
const DEFAULT_STEP = 15;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const pad = (val) => String(val).padStart(2, 0);
const parseAloowedTimeString = (string) => string.split(";")
  .map((pair) => pair.split("-").map((str) => str.split(":").map((num) => parseInt(num, 10))));
const isTimeAllowed = ({ hours: _h, minutes: _m }, a) => (!a || a.some(([[h1, m1], [h2, m2]]) => {
  if (_m === null) {
    return (_h >= h1) && (_h <= h2);
  }
  return ((_h === h1) ? (_m >= m1) : (_h > h1)) && ((_h === h2) ? (_m <= m2) : (_h < h2));
}));

const Timepicker = memo((props) => {
  const {
    className,
    allowedTime,
    step = DEFAULT_STEP,
    ...rest
  } = props;

  const allowedTimeParsed = useMemo(() => allowedTime && parseAloowedTimeString(allowedTime), [allowedTime]);

  const options = useMemo(() => {
    return [...new Array(MINUTES_IN_HOUR * HOURS_IN_DAY / step)]
      .map((_, idx) => {
        const minutes = step * idx;
        const hours = Math.floor(minutes / MINUTES_IN_HOUR);
        const mins = minutes % MINUTES_IN_HOUR;
        const str = `${pad(hours)}:${pad(mins)}`;
        return {
          value: str,
          label: str,
          disabled: !isTimeAllowed({ hours, minutes: mins }, allowedTimeParsed),
        };
      });
  });

  return (
    <div className={classNames([CLASS_NAME, className])}>
      <Select
        options={options}
        placeholder="00:00"
        {...rest} />
    </div>
  );
});

export default Timepicker;
