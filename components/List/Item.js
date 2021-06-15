import "./style.scss";

import React, { createRef, PureComponent } from "react";
import { classes } from "../utils";
import { KEY_ENTER } from "../constants";
import CheckBox from "../CheckBox";

const Image = ({ src }) => (
  <div
    className="ui-list-item-image"
    style={{ backgroundImage: `url(${src})` }} />
);
const SCROLL_OPTIONS = { block: "center" };

class Item extends PureComponent {
  containerRef = createRef();

  componentDidMount() {
    const { selected, notActive } = this.props;
    window.addEventListener("keydown", this.handleKeyPress);
    if (notActive || !selected) return;
    this.containerRef.current.scrollIntoView(SCROLL_OPTIONS);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    const { selected, notActive } = this.props;
    const { key } = event;
    if (notActive || !selected || key !== KEY_ENTER) return;
    event.stopImmediatePropagation();
    event.preventDefault();
    this.onClick(event);
  };

  handleClick = (event) => {
    const { item, notActive, onClick } = this.props;
    if (onClick && !notActive) onClick(item, event);
  };

  render() {
    const {
      className,
      item,
      checkbox,
      checked,
      notActive,
      selected,
    } = this.props;
    const { img, label } = item;
    return (
      <div
        ref={this.containerRef}
        className={classes([
          "ui-list-item",
          notActive && "ui-list-item-not-active",
          selected && "ui-list-item-selected",
          className,
        ])}
        onClick={this.handleClick}>
        {checkbox && (
          <CheckBox value={checked} />
        )}
        {img ? (<Image src={img} />) : null}
        <div className="ui-list-item-label">{label || item}</div>
      </div>
    );
  }
}

export default Item;
