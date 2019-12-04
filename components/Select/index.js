import './style.scss';

import React, { PureComponent } from 'react';
import { classes } from '../utils';
import DropDown from '../DropDown';
import Option from './Option';

class Select extends PureComponent {
  onOptionClick = (value) => {
    const { onChange } = this.props;
    const { dropdown } = this.refs;
    if (onChange) onChange(value);
    dropdown.setState({ opened: false });
  };

  render() {
    const {
      className,
      value,
      label,
      options,
      disabled,
      error,
      ...props
    } = this.props;
    const classList = classes({
      'ui-select': true,
      'ui-with-error': error,
      [className]: className,
    });
    const { label: selectedLabel } = options
      .filter(i => i).find(({ value: val }) => val === value) || options[0] || {};
    return (
      <div className={classList} {...props}>
        <DropDown
          label={label}
          buttonContent={selectedLabel}
          disabled={disabled}
          inline={false}
          name="ui-select"
          ref="dropdown"
        >
          {options.map(opt => (opt ? (
            <Option
              key={opt.value}
              onClick={this.onOptionClick}
              selected={opt.value === value}
              label={opt.label}
              value={opt.value}
            />
          ) : null))}
        </DropDown>
      </div>
    );
  }
}

Select.Option = Option;

export default Select;
