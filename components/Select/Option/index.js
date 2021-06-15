import "./style.scss";

import React, { memo, useCallback, useEffect, useRef } from "react";
import { classNames } from "../../utils";

const Option = memo((props) => {
  const {
    className,
    value,
    label,
    selected,
    disabled,
    onClick,
  } = props;
  const rootRef = useRef();
  const classList = classNames({
    "ui-option": true,
    "ui-selected": selected,
    "ui-disabled": disabled,
    [className]: className,
  });

  const handleClick = useCallback(() => {
    if (selected || disabled) return;
    onClick(value);
  }, [onClick, value, selected]);

  useEffect(() => {
    if (!selected) return;
    rootRef.current.scrollIntoView();
  }, []);

  return (
    <div
      className={classList}
      ref={rootRef}
      onClick={handleClick}>
      <div className="ui-ellipsis">{label || value}</div>
    </div>
  );
});

export default Option;
