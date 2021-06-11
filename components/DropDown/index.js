import "./style.scss";

import React, { PureComponent } from "react";
import Button from "../Button";
import { KEY_ESC, KEY_DOWN } from "../constants";
import { classes, isFunction } from "../utils";
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
    window.addEventListener("mousedown", this.windowMouseDownHandler, true);
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.windowMouseDownHandler, true);
  }

  windowMouseDownHandler = (event) => {
    const { disabled } = this.props;
    const { opened } = this.state;
    if (disabled || !opened) return;
    event.stopImmediatePropagation();
    const { button } = this.refs;
    const dropdown = this.dropdown;
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

  handleDropDownClick = () => {
    const { closeOnClick } = this.props;
    if (!closeOnClick) return;
    this.toggleOpenState(false);
  }

  clickHandler = () => {
    const { disabled, manual } = this.props;
    if (disabled || manual) return;
    this.toggleOpenState();
  };

  checkPosition = (dropdown) => {
    this.dropdown = dropdown;
    const { inline, autoWidth, alignRight } = this.props;
    if (inline || !dropdown) return;
    const { button } = this.refs;
    const { innerHeight: windowHeight, innerWidth: windowWidth } = window;
    const {
      width,
      left,
      right,
      top,
      bottom,
      height,
    } = button.getBoundingClientRect();
    const { width: contentWidth } = dropdown.getBoundingClientRect();
    const onTop = top > (windowHeight + height) / 2;
    const overflowRight = Math.max(left + contentWidth - windowWidth, 0);
    this.setState({
      dropDownStyle: {
        width: autoWidth ? "" : width,
        left: alignRight ? "auto" : (left - overflowRight),
        right: alignRight ? (windowWidth - right) : "auto",
        top: onTop ? "" : bottom,
        bottom: onTop ? windowHeight - top : "",
      },
    });
  }

  toggleOpenState(...args) {
    const { inline = true, manual } = this.props;
    const { opened: stateOpened } = this.state;
    const [opened = !stateOpened] = args;
    this.setState({ opened });
  }

  renderContent() {
    const {
      name = "ui",
      inline = true,
      dropdownClassName,
      children,
    } = this.props;
    const { opened, dropDownStyle } = this.state;
    if (!opened) return null;
    const content = (
      <div
        className={classes(["ui-component", dropdownClassName, `${name}_dropdown`])}
        onClick={this.handleDropDownClick}>
        <div
          className="ui-dropdown-content"
          ref={this.checkPosition}
          style={inline ? null : dropDownStyle}>
          {isFunction(children) ? children() : children}
        </div>
      </div>
    );
    return inline ? content : (<Portal>{content}</Portal>);
  }

  render() {
    const {
      children,
      label,
      buttonContent,
      className,
      inline,
      button,
      name,
      disabled,
      closeDelay,
      manual,
      autoWidth,
      alignRight,
      closeOnClick,
      dropdownClassName,
      ...rest
    } = this.props;
    const { opened } = this.state;
    const classList = classes({
      "ui-component ui-dropdown": true,
      "ui-dropdown-opened": opened,
      "ui-disabled": disabled,
      "ui-align-right": alignRight,
      [className]: className,
    });
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
              onClick={this.clickHandler}>
              <div className="ui-ellipsis">{buttonContent}</div>
            </Button>
          )}
          {this.renderContent()}
        </div>
        {!button && (opened ? (<IconExpandLess />) : (<IconExpandMore />))}
      </div>
    );
  }
}

export default DropDown;
