import "./style.scss";

import React, { PureComponent } from "react";
import { classes } from "../utils";
import { KEY_UP, KEY_DOWN } from "../constants";
import Item from "./Item";

class List extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { selected: -1 };
  }

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
  }

  handleKeyPress = (event) => {
    const { items } = this.props;
    const { selected } = this.state;
    const { key } = event;
    let value = selected;
    switch (key) {
      case KEY_UP:
        value--;
        break;
      case KEY_DOWN:
        value++;
        break;
      default:
        return;
    }
    event.stopImmediatePropagation();
    event.preventDefault();
    if (value < 0) value = items.length - 1;
    if (value === items.length) value = 0;
    this.setState({ selected: value });
  };

  render() {
    const {
      className,
      children,
      items,
      value,
      onClick,
      imageSize = "medium",
      checkbox,
      notActive,
      isSelected,
      ...props
    } = this.props;
    const { selected } = this.state;
    return (
      <div className={classes(["ui-component ui-list", className, `ui-list-images-${imageSize}`])} {...props}>
        {items ? items.map((item, index) => (
          <Item
            key={`${item.id || 0}.${index}.${selected === index ? 1 : 0}`}
            item={item}
            onClick={onClick}
            checkbox={checkbox}
            checked={checkbox && isSelected && isSelected(item)}
            selected={selected === index}
            notActive={notActive} />
        )) : children}
      </div>
    );
  }
}

export default List;
