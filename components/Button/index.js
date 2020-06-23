import './style.scss';

import React, { Component } from 'react';
import { bool, string } from 'prop-types';
import { classes } from '../utils';

class Button extends Component {
  handleClick = (event) => {
    const { name, onClick } = this.props;
    if (!onClick) return;
    onClick(event, name);
  }

  render() {
    const {
      children,
      primary,
      danger,
      warning,
      success,
      stroke,
      uppercased,
      className,
      block,
      loading,
      unbordered,
      large,
      small,
      active,
      hovered,
      focused,
      name,
      ...rest
    } = this.props;
    if (loading) rest.disabled = true;
    const classList = classes({
      'ui-component ui-button': true,
      'ui-button-loading': loading,
      'ui-button-primary': primary,
      'ui-button-danger': danger,
      'ui-button-warning': warning,
      'ui-button-success': success,
      'ui-button-stroke': stroke,
      'ui-button-block': block,
      'ui-button-unbordered': unbordered,
      'ui-uppercased': uppercased,
      'ui-button-large': large,
      'ui-button-small': small,
      'ui-button-active': active,
      'ui-button-hovered': hovered,
      'ui-button-focused': focused,
      [className]: className,
    });
    return (
      <button
        type="button"
        className={classList}
        {...rest}
        onClick={this.handleClick}
      >
        {children}
      </button>
    );
  }
}

Button.propsTypes = {
  className: string,
  primary: bool,
  danger: bool,
  warning: bool,
  success: bool,
  stroke: bool,
  uppercased: bool,
  block: bool,
  loading: bool,
  unbordered: bool,
  large: bool,
  small: bool,
  active: bool,
  hovered: bool,
  focused: bool,
};

export default Button;
