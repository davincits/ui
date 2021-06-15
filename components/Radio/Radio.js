import "./style.scss";

import React, { PureComponent } from "react";
import { classes } from "../utils";

class Radio extends PureComponent {
  handleChange = () => {
    const { value, disabled, onChange } = this.props;
    if (onChange && !disabled) onChange(value);
  };

  render() {
    const {
      className,
      children,
      onChange,
      checked,
      disabled,
      ...rest
    } = this.props;
    return (
      <div
        className={classes([
          "ui-component ui-radio",
          checked && "ui-radio-checked",
          disabled && "ui-disabled",
          className,
        ])}
        onClick={this.handleChange}>
        <input type="radio" onChange={this.handleChange} checked={checked} {...rest} />
        <span className="ui-fake-radio" />
        {!!children && <div className="ui-label">{children}</div>}
      </div>
    );
  }
}

export default Radio;
