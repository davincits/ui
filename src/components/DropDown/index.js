import './style.scss';

import React, { PureComponent } from 'react';
import Button from '../Button';
import Label from '../Label';
import TextEllipsis from '../TextEllipsis';
import { classes } from '../utils';
import IconExpandMore from '../icons/ExpandMore';
import IconExpandLess from '../icons/ExpandLess';
import Portal from '../Portal';

const MARGIN = 0;

class DropDown extends PureComponent {
  state = { opened: false }

  componentDidMount() {
    window.addEventListener('mousedown', this.windowClickHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.windowClickHandler);
  }

  clickHandler = () => {
    const { inline = true, disabled } = this.props;
    if (disabled) return;
    if (!inline) {
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
          bottom: onTop && windowHeight - top,
          maxHeight: (onTop ? top : windowHeight - bottom) - MARGIN,
        },
      });
    }
    this.toggleOpenState();
  };

  windowClickHandler = (event) => {
    const { disabled } = this.props;
    const { opened } = this.state;
    if (disabled || !opened) return;
    const { button, dropdown } = this.refs;
    let parent = event.target;
    while (parent) {
      if (parent.isSameNode(dropdown) || parent.isSameNode(button)) return;
      parent = parent.parentNode;
    }
    this.toggleOpenState(false);
  };

  toggleOpenState(opened = null) {
    const { opened: current } = this.state;
    if (opened === null) opened = !current;
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
      button,
      name,
      disabled,
      ...rest
    } = this.props;
    const { opened, dropDownStyle } = this.state;
    const classList = classes({
      'ui-dropdown': true,
      'ui-dropdown-opened': opened,
      [className]: className,
      disabled,
    });
    const dropDown = (
      <div className={name ? `${name}_dropdown` : ''}>
        <div
          className="ui-dropdown-content"
          ref="dropdown"
          style={inline ? null : dropDownStyle}
        >
          {children}
        </div>
      </div>
    );
    return (
      <div className={classList} {...rest}>
        {!!label && <Label className="ui-dropdown-label">{label}</Label>}
        <div className="ui-dropdown-button-container" ref="button">
          <div onClick={this.clickHandler}>
            {button ? (
              React.cloneElement(button, { disabled })
            ) : (
              <Button className="ui-dropdown-button" disabled={disabled}>
                <TextEllipsis>{buttonContent}</TextEllipsis>
              </Button>
            )}
          </div>
          {opened && (inline ? dropDown : <Portal>{dropDown}</Portal>)}
        </div>
        {!button && (opened ? <IconExpandLess /> : <IconExpandMore />)}
      </div>
    );
  }
}

export default DropDown;
