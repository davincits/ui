import React, { Children } from 'react';

function RadioGroup({ children, value, onChange }) {
  return Children.map(children, child => React.cloneElement(child, {
    checked: value === child.props.value,
    onChange,
  }))
}

export default RadioGroup;