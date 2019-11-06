import './style.scss';

import React, { PureComponent } from 'react';
import { classes } from '../utils';
import Tag from './Tag';

const ENTER_CODE = 'Enter';

class TagsField extends PureComponent {
  state = {
    inputValue: '',
  };

  onInputChange = (event) => {
    const { onInputChange } = this.props;
    const { target: { value: inputValue } } = event;
    this.setState({ inputValue });
    if (onInputChange) onInputChange(inputValue);
  };

  onInputKeyPress = (event) => {
    const { key, target } = event;
    const { value, onChange } = this.props;
    const inputValue = target.value.trim();
    if (key === ENTER_CODE && inputValue && onChange) {
      onChange(Array.isArray(value) ? [...value, inputValue] : [inputValue]);
      this.setState({ inputValue: '' });
    }
  };

  onRemove = (index) => {
    const { value, onChange } = this.props;
    if (onChange) {
      onChange(value.filter((v, i) => i !== index));
    }
  }

  onClick = (event) => {
    const { input } = this.refs;
    const { target, currentTarget } = event;
    if (target === currentTarget) {
      input.focus();
    }
  }

  render() {
    const {
      className,
      label,
      error,
      disabled,
      value,
      onFocus,
      ...rest
    } = this.props;
    const { inputValue } = this.state;
    const classList = classes({
      'ui-tags-field': true,
      'ui-disabled': disabled,
      [className]: className,
    });
    return (
      <div className={classList} onClick={this.onClick}>
        {Array.isArray(value) && value.map((str, i) => (
          <Tag key={i} value={str} index={i} onRemove={this.onRemove} />
        ))}
        <input
          ref="input"
          value={inputValue}
          disabled={disabled}
          onChange={this.onInputChange}
          onKeyPress={this.onInputKeyPress}
          onFocus={onFocus}
        />
      </div>
    );
  }
}

export default TagsField;
