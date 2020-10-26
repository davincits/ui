import React, { PureComponent } from 'react';
import { classes, isFunction } from '../utils';
import Portal from '../Portal';

class DropDownContent extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      styles: null,
    };
  }

  checkPosition = (container) => {
    if (!container) return;
    const { autoWidth, alignRight, getButtonRef } = this.props;
    const button = getButtonRef();
    console.log([button, container]);
    // const { innerHeight: windowHeight, innerWidth: windowWidth } = window;
    // const {
    //   width,
    //   left,
    //   right,
    //   top,
    //   bottom,
    //   height,
    // } = button.getBoundingClientRect();
    // const onTop = top > (windowHeight + height) / 2;
    // this.setState({
    //   dropDownStyle: {
    //     width: autoWidth ? "" : width,
    //     left: alignRight ? "auto" : left,
    //     right: alignRight ? (windowWidth - right) : "auto",
    //     top: onTop ? "" : bottom,
    //     bottom: onTop ? windowHeight - top : "",
    //   },
    // });
  }

  renderContent() {
    const {
      name = 'ui',
      dropdownClassName,
      inline,
      children,
    } = this.props;
    const { styles } = this.state;
    return (
      <div
        className={classes(['ui-component', dropdownClassName, `${name}_dropdown`])}
        onClick={this.handleDropDownClick}
        ref={this.checkPosition}
      >
        <div
          className="ui-dropdown-content"
          ref="dropdown"
          style={inline ? null : styles}
        >
          {isFunction(children) ? children() : children}
        </div>
      </div>
    );
  }

  render() {
    const { inline } = this.props;
    const content = this.renderContent();
    return inline ? content : (<Portal>{content}</Portal>);
  }
}

export default DropDownContent;
