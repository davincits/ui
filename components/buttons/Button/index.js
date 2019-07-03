import React from 'react';

import './styles.scss';

function FlatButton(props) {
  const {
    fullWidth,
    primary,
    small,
    children,
    raised,
    secondary,
    ...rest
  } = props;
  const classNames = ['ui-button'];
  if (fullWidth) {
    classNames.push('ui-button-full-width');
  }
  if (primary) {
    classNames.push('ui-button-primary');
  }
  if (small) {
    classNames.push('ui-button-small');
  }
  if (raised) {
    classNames.push('ui-button-raised');
  }
  if (secondary) {
    classNames.push('ui-button-secondary');
  }
  return (
    <button className={classNames.join(' ')} {...rest}>
      {children}
    </button>
  );
}

export default FlatButton;
