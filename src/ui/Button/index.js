import './style.scss';

import React from 'react';
import { classes } from '../utils';

function Button(props) {
  const {
    children,
    primary,
    danger,
    uppercase,
    className,
    block,
    loading,
    unbordered,
    blue,
    large,
    small,
    active,
    ...rest
  } = props;
  if (loading) rest.disabled = true;
  const classList = classes({
    'ui-button': true,
    'ui-button-loading': loading,
    'ui-button-primary': primary,
    'ui-button-danger': danger,
    'ui-button-block': block,
    'ui-button-unbordered': unbordered,
    'ui-button-blue': blue,
    'ui-uppercase': uppercase,
    'ui-button-large': large,
    'ui-button-small': small,
    'ui-button-active': active,
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

export default Button;
