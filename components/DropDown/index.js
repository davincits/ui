import React, { PureComponent } from 'react';
import Button from '../Button';
import { classes } from '../utils';
import IconExpandMore from '../icons/ExpandMore';
import IconExpandLess from '../icons/ExpandLess';
import Portal from '../Portal';

import './styles.scss';

const MARGIN = 0;

class DropDown extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { opened: false };
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.windowClickHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.windowClickHandler);
  }

  clickHandler = () => {
    const { button } = this.refs;
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
        width,
        left,
        top: !onTop && bottom,
        bottom: onTop && (windowHeight - top),
        maxHeight: (onTop ? top : (windowHeight - bottom)) - MARGIN,
      },
    });
    this.toggleOpenState();
  }

  windowClickHandler = (event) => {
    const { button, dropdown } = this.refs;
    let parent = event.target;
    while (parent) {
      if (parent === dropdown || parent === button) return;
      parent = parent.parentNode;
    }
    this.toggleOpenState(false);
  }

  toggleOpenState(opened = !this.state.opened) {
    this.setState({ opened });
  }

  render() {
    const {
      children,
      label,
      buttonContent,
      className,
      closeDropDown,
      inline = true,
      ...rest
    } = this.props;
    const {
      opened,
      dropDownStyle,
    } = this.state;
    const classList = classes({
      'ui-dropdown': true,
      'ui-dropdown-opened': opened,
      [className]: className,
    });
    const dropDown = (
      <div
        className="ui-dropdown-content ui-paper"
        ref="dropdown"
        style={dropDownStyle}
      >
        {children}
      </div>
    );
    return (
      <div className={classList} {...rest}>
        {!!label && <div className="ui-dropdown-label">{label}</div>}
        <div className="ui-dropdown-button-container" ref="button">
          <Button className="ui-dropdown-button" onClick={this.clickHandler}>
            <div className="ui-ellipsis">{buttonContent}</div>
          </Button>
          {opened && (inline ? dropDown : (<Portal>{dropDown}</Portal>))}
        </div>
        {opened ? <IconExpandLess /> : <IconExpandMore />}
      </div>
    );
  }
}

export default DropDown;
