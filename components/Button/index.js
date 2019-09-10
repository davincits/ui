import './style.scss';

import React from 'react';
import { bool } from 'prop-types';
import { classes } from '../utils';

const propsTypes = {
  primary: bool,
  danger: bool,
  uppercase: bool,
  block: bool,
  loading: bool,
  unbordered: bool,
  blue: bool,
  large: bool,
  small: bool,
  active: bool,
}

function Button(props) {
  const {
    children,
    primary,
    danger,
    warning,
    success,
    stroke,
    uppercase,
    className,
    block,
    loading,
    unbordered,
    blue,
    large,
    small,
    active,
    hover,
    focus,
    ...rest
  } = props;
  if (loading) rest.disabled = true;
  const classList = classes({
    'ui-button': true,
    'ui-button-loading': loading,
    'ui-button-primary': primary,
    'ui-button-danger': danger,
    'ui-button-warning': warning,
    'ui-button-success': success,
    'ui-button-stroke': stroke,
    'ui-button-block': block,
    'ui-button-unbordered': unbordered,
    'ui-button-blue': blue,
    'ui-uppercase': uppercase,
    'ui-button-large': large,
    'ui-button-small': small,
    'ui-button-active': active,
    'ui-button-hover': hover,
    'ui-button-focus': focus,
    [className]: className,
  });
  return (
    <button
      type="button"
      className={classList}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.propsTypes = propsTypes;

export default Button;
