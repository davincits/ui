import React, { PureComponent } from "react";
import { classes } from "../utils";

class Tab extends PureComponent {
  handleClick = (event) => {
    const {
      index, disabled, changeIndex, onClick,
    } = this.props;
    if (disabled) return;
    if (changeIndex) {
      changeIndex(index);
    }
    if (onClick) onClick(event);
  };

  render() {
    const {
      className, active, disabled, children,
    } = this.props;
    const classList = classes([
      "ui-component ui-tab",
      active && "ui-active",
      disabled && "ui-disabled",
      className,
    ]);
    return (
      <div
        className={classList}
        onClick={this.handleClick}>
        {children}
      </div>
    );
  }
}

export default Tab;
