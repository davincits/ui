import React, { memo, useCallback } from "react";
import { classNames } from "../utils";

const Toggle = memo((props) => {
  const {
    index,
    className,
    children,
    active,
    disabled,
    onChangeIndex,
    onClick,
  } = props;

  const handleClick = useCallback((event) => {
    if (disabled) return;
    if (onChangeIndex) onChangeIndex(index);
    if (onClick) onClick(event);
  }, [disabled, index, onChangeIndex, onClick]);

  return (
    <div
      className={classNames([
        "ui-component ui-accordion-toggle",
        active && "ui-active",
        disabled && "ui-disabled",
        className,
      ])}
      onClick={handleClick}>
      {children}
    </div>
  );
});

export default Toggle;
