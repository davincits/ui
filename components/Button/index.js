import React from 'react';
import { classes } from '../utils';

import './styles.scss';

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
    small,
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
    'ui-button-small': small,
    [className]: className,
  });
  return (<button className={classList} {...rest}>{children}</button>);
}

export default Button;
