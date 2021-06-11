import "./style.scss";

import React, { memo, useCallback, useRef } from "react";

import { CLASS_NAME_BASE, CLASS_NAME_DISABLED } from "../constants";
import { classNames } from "../utils";
import IconTime from "../icons/Time";
import DropDown from "../DropDown";
import Content from "./Content";

const CLASS_NAME = `${CLASS_NAME_BASE} ui-timepicker`;
const DEFAULT_LABEL = (
  <div className="ui-timepicker-icon-container">
    <IconTime />
  </div>
);

const Timepicker = memo((props) => {
  const {
    value,
    label = DEFAULT_LABEL,
    className,
    allowedTime,
    disabled,
    onChange,
  } = props;

  return (
    <div className={classNames([CLASS_NAME, disabled && CLASS_NAME_DISABLED, className])}>
      <DropDown
        button={label}
        inline={false}
        disabled={disabled}
        name="ui-timepicker">
        <Content
          value={value}
          onChange={onChange}
          allowedTime={allowedTime} />
      </DropDown>
    </div>
  );
});

export default Timepicker;
