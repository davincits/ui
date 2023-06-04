
import "./style.scss";

import React, { PureComponent } from "react";
import { classes } from "../utils";

class CheckBox extends PureComponent {
  handleClick = () => {
    const {
      value, name, disabled, onChange,
    } = this.props;
    if (onChange && !disabled) onChange(!value, name);
  };

  render() {
    const {
      className,
      label,
      children,
      onChange,
      value = false,
      indeterminate,
      error,
      disabled,
      tumbler,
      ...rest
    } = this.props;
    return (
      <div
        className={classes([
          "ui-component ui-checkbox",
          indeterminate && "ui-checkbox-indeterminate",
          value && "ui-checkbox-checked",
          tumbler && "ui-checkbox-tumbler",
          error && "ui-with-error",
          disabled && "ui-disabled",
          className,
        ])}
        onClick={this.handleClick}>
        <input type="checkbox" onChange={this.handleClick} checked={value} disabled={disabled} {...rest} />
        <div className="ui-fake-checkbox" />
        {!!label && (<div className="ui-label">{label}</div>)}
        {children}
      </div>
    );
  }
}

export default CheckBox;
