import "./style.scss";

import React, { memo, useCallback } from "react";
import { classNames } from "../utils";

const Button = memo((props) => {
  const {
    children,
    primary,
    danger,
    warning,
    success,
    stroke,
    uppercased,
    className,
    block,
    loading,
    unbordered,
    large,
    small,
    active,
    hovered,
    focused,
    name,
    onClick,
    ...rest
  } = props;

  const handleClick = useCallback((event) => {
    if (!onClick) return;
    onClick(event, name);
  }, [onClick, name]);

  if (loading) rest.disabled = true;
  const classList = classNames({
    "ui-component ui-button": true,
    "ui-button-loading": loading,
    "ui-button-primary": primary,
    "ui-button-danger": danger,
    "ui-button-warning": warning,
    "ui-button-success": success,
    "ui-button-stroke": stroke,
    "ui-button-block": block,
    "ui-button-unbordered": unbordered,
    "ui-uppercased": uppercased,
    "ui-button-large": large,
    "ui-button-small": small,
    "ui-button-active": active,
    "ui-button-hovered": hovered,
    "ui-button-focused": focused,
    [className]: className,
  });
  return (
    <button
      type="button"
      className={classList}
      {...rest}
      onClick={handleClick}>
      {children}
    </button>
  );
});

export default Button;
