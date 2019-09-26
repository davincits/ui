import React, { Children } from 'react';
import { classes } from '../utils';

function RadioGroup({ children, value, onChange, className }) {
  return (
    <div  className={classes(['ui-radio-group', className])}>
      {Children.map(children, child => React.cloneElement(child, {
        checked: value === child.props.value,
        onChange,
      }))}
    </div>
  );
}

export default RadioGroup;
