import './style.scss';

import React from 'react';
import { classes } from '../utils';

function Flex(props) {
  const {
    children,
    className,
    ...rest
  } = props;
  const classList = classes({
    'ui-flex': true,
    [className]: className,
  });
  return (<div className={classList} {...rest}>{children}</div>);
}

export default Flex;
