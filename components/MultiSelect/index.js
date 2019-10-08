import './style.scss';

import React, { Component } from 'react';
import DropDown from '../DropDown';
import Item from './Item';
import { classes } from '../utils';
import { array } from 'prop-types';

class MultiSelect extends Component {
  onSelect = (val) => {
    const { value, onChange } = this.props;
    if (!onChange) return;
    if (!value) return onChange([val]);
    onChange(value.includes(val) ? value.filter(item => item !== val) : [...value, val]);
  }

  getButtonContent() {
    const { value, options } = this.props;
    if (!value || !value.length) return 'Choose...';
    if (value.length === 1) {
      return options.find(i => i.value === value[0]).label;
    }
    return `Selected: ${value.length}`;
  }

  render() {
    const {
      className,
      label,
      options,
      value,
      buttonContent = this.getButtonContent(),
      inline,
    } = this.props;
    return (
      <div className={classes(['ui-multiselect', className])}>
        <DropDown label={label} buttonContent={buttonContent} inline={inline} name="ui-multiselect">
          {Array.isArray(options) ? options.map(i => (
            <Item
              key={i.value}
              value={i.value}
              label={i.label}
              selected={Boolean(value && value.includes(i.value))}
              onSelect={this.onSelect}
            />
          )) : null}
        </DropDown>
      </div>
    );
  }
}

MultiSelect.propTypes = {
  value: array,
};

export default MultiSelect;
