import "./style.scss";

import React, { createRef, PureComponent } from "react";
import { classes } from "../utils";

class Tooltip extends PureComponent {
  tooltip = createRef();

  componentDidMount() {
    const { checkPosition } = this.props;
    if (!checkPosition) return;
    const bounding = this.tooltip.current.getBoundingClientRect();
    const leftOver = window.innerWidth - bounding.right;
    const rightOver = bounding.left;
    if (leftOver < 0) this.tooltip.current.style.marginLeft = `${leftOver}px`;
    if (rightOver < 0) this.tooltip.current.style.marginLeft = `${-rightOver}px`;
  }

  render() {
    const {
      children,
      className,
      top,
      left,
    } = this.props;
    return (
      <div
        className={classes(["ui-component ui-tooltip", className])}
        style={{ left: `${left}px`, top: `${top}px` }}>
        <div className="ui-tooltip-content" ref={this.tooltip}>{children}</div>
      </div>
    );
  }
}

export default Tooltip;
