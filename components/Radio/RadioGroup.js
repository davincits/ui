import React, { Children } from 'react';
import { func } from 'prop-types';
import { classes } from '../utils';

function RadioGroup({
  children, value, onChange, className, error,
}) {
  return (
    <div className={classes(['ui-radio-group', error && 'ui-with-error', className])}>
      {Children.map(children, (child) => React.cloneElement(child, {
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
