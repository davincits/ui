import "./style.scss";

import React, { PureComponent } from "react";
import Button from "../Button";
import { KEY_ESC, KEY_DOWN } from "../constants";
import { classes } from "../utils";
import IconExpandMore from "../icons/ExpandMore";
import IconExpandLess from "../icons/ExpandLess";
import Portal from "../Portal";

const MARGIN = 0;

class DropDown extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = { opened: false };
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.windowMouseDownHandler, true);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.windowMouseDownHandler, true);
  }

  windowMouseDownHandler = (event) => {
    const { disabled } = this.props;
    const { opened } = this.state;
    if (disabled || !opened) return;
    event.stopImmediatePropagation();
    const { button, dropdown } = this.refs;
    let parent = event.target;
    while (parent) {
      if (parent.isSameNode(dropdown) || parent.isSameNode(button)) return;
      parent = parent.parentNode;
    }
    this.toggleOpenState(false);
  };

  handleKeyPress = (event) => {
    const { opened } = this.state;
    const { key } = event;
    if (opened ? (key !== KEY_ESC) : (key !== KEY_DOWN)) return;
    event.preventDefault();
    event.nativeEvent.stopImmediatePropagation();
    this.toggleOpenState();
  };

  clickHandler = () => {
    const { disabled, manual } = this.props;
    if (disabled || manual) return;
    this.toggleOpenState();
  };

  checkPosition = () => {
    const { button } = this.refs;
    const { autoWidth } = this.props;
    const { innerHeight: windowHeight } = window;
    const {
      width,
      left,
      top,
      bottom,
      height,
    } = button.getBoundingClientRect();
    const onTop = top > (windowHeight + height) / 2;
    this.setState({
      dropDownStyle: {
        width: autoWidth ? "" : width,
        left,
        top: onTop ? "" : bottom,
        bottom: onTop ? windowHeight - top : "",
      },
    });
  }

  toggleOpenState(...args) {
    const { inline = true, manual } = this.props;
    const { opened: stateOpened } = this.state;
    const [opened = !stateOpened] = args;
    this.setState({ opened }, () => {
      if (inline || !opened) return;
      this.checkPosition();
    });
  }

  render() {
    const {
      children,
      label,
      buttonContent,
      className,
      inline = true,
      button,
      name,
      disabled,
      closeDelay,
      manual,
      autoWidth,
      ...rest
    } = this.props;
    const { opened, dropDownStyle } = this.state;
    const classList = classes({
      "ui-component ui-dropdown": true,
      "ui-dropdown-opened": opened,
      "ui-disabled": disabled,
      [className]: className,
    });
    const dropDown = children ? (
      <div className={`ui-component ${name || "ui"}_dropdown${className ? ` ${className}` : ""}`}>
        <div
          className="ui-dropdown-content"
          ref="dropdown"
          style={inline ? null : dropDownStyle}>
          {children}
        </div>
      </div>
    ) : null;
    return (
      <div className={classList} {...rest} onKeyDown={this.handleKeyPress}>
        {!!label && <div className="ui-label ui-dropdown-label">{label}</div>}
        <div className="ui-dropdown-button-container" ref="button">
          {button ? (
            React.cloneElement(button, {
              onClick: this.clickHandler,
              ...(disabled ? { disabled: true } : null),
            })
          ) : (
            <Button
              className="ui-dropdown-button"
              focused={opened}
              disabled={disabled}
              onClick={this.clickHandler}
              uppercased={false}>
              <div className="ui-ellipsis">{buttonContent}</div>
            </Button>
          )}
          {dropDown && opened && (inline ? dropDown : <Portal>{dropDown}</Portal>)}
        </div>
        {!button && (dropDown && opened ? <IconExpandLess /> : <IconExpandMore />)}
      </div>
    );
  }
}

export default DropDown;
