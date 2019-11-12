import './style.scss';

import React, { Component } from 'react';
import DropDown from '../DropDown';
import List from '../List';
import { classes } from '../utils';

class MultiSelect extends Component {
  onSelect = (val) => {
    const { value, onChange } = this.props;
    if (!onChange) return;
    if (!value) return onChange([val]);
    onChange(value.includes(val) ? value.filter((item) => item !== val) : [...value, val]);
  }

  getButtonContent() {
    const { value, options } = this.props;
    if (!value || !value.length) return 'Choose...';
    if (value.length === 1) {
      return options.find((i) => i.value === value[0].value).label;
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
      imageSize,
    } = this.props;
    return (
      <div className={classes(['ui-multiselect', className])}>
        <DropDown label={label} buttonContent={buttonContent} inline={inline} name="ui-multiselect">
          <List
            items={Array.isArray(options) ? options : []}
            onClick={this.onSelect}
            imageSize={imageSize}
            isChecked={(i) => Boolean(value && value.includes(i))}
            checkbox
          />
        </DropDown>
      </div>
    );
  }
}

export default MultiSelect;
