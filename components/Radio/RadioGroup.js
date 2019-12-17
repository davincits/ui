import React, { Children } from 'react';
import { func } from 'prop-types';
import { classes } from '../utils';

function RadioGroup({
  children,
  value,
  onChange,
  className,
  error,
  disabled,
}) {
  return (
    <div className={classes(['ui-component ui-radio-group', error && 'ui-with-error', className])}>
      {Children.map(children, (child) => React.cloneElement(child, {
        disabled: disabled || child.props.disabled,
        checked: value === child.props.value,
        onChange,
      }))}
    </div>
  );
}

RadioGroup.propTypes = {
  onChange: func,
};

export default RadioGroup;
