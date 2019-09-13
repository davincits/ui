import React, { Children } from 'react';

function RadioGroup({ children, value, onChange }) {
  return (
    <div className="ui-radio-group">
      {Children.map(children, child => React.cloneElement(child, {
        checked: value === child.props.value,
        onChange,
      }))}
    </div>
  );
}

export default RadioGroup;
