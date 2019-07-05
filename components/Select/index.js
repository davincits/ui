import React, { PureComponent } from 'react';
import { classes } from '../utils';
import DropDown from '../DropDown';
import Option from '../Option';

class Select extends PureComponent {
  onOptionClick = (value) => {
    const { onChange } = this.props;
    const { dropdown } = this.refs;
    if (onChange) onChange(value);
    dropdown.setState({ opened: false });
  }

  render() {
    const {
      className,
      value,
      label,
      options,
      ...props
    } = this.props;
    const classList = classes({
      'ui-select': true,
      [className]: className,
    });
    const { label: selectedLabel } = options.find(({ value: val }) => val === value) || options[0];
    return (
      <div className={classList} {...props}>
        <DropDown
          label={label}
          buttonContent={selectedLabel}
          inline={false}
          className="ui-select-dropdown-content"
          ref="dropdown"
        >
          {options.map(props => (
            <Option
              key={props.value}
              onClick={this.onOptionClick}
              selected={props.value === value}
              {...props}
            />
          ))}
        </DropDown>
      </div>
    );
  }
}

export default Select;
