import './style.scss';

import React, { PureComponent } from 'react';
import { classes } from '../utils';
import Tag from './Tag';

const KEY_NAMES = ['Enter', ',', ' '];

class TagsField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      focused: false,
    };
  }

  completeInput = (target) => {
    const {
      value, onChange, onInputChange, noCustom,
    } = this.props;
    const inputValue = target.value.trim();
    const inputValues = inputValue ? inputValue.replace(/(?:\s*,\s*|\s+)/g, ",").split(",") : [];
    if (inputValues.length && onChange && !noCustom) {
      const uniqValues = inputValues.filter((item) => !(value || []).includes(item));
      onChange(Array.isArray(value) ? [...value, ...uniqValues] : uniqValues);
      if (onInputChange) onInputChange('');
      this.setState({ inputValue: '' });
    }
  }

  onInputChange = (event) => {
    const { onInputChange } = this.props;
    const { target: { value: inputValue } } = event;
    this.setState({ inputValue });
    if (onInputChange) onInputChange(inputValue);
  };

  onInputKeyPress = (event) => {
    const { key, target } = event;
    const inputValue = target.value.trim();
    if (KEY_NAMES.includes(key)) {
      event.preventDefault();
      this.completeInput(target);
    }
  };

  onRemove = (index) => {
    const { value, disabled, onChange } = this.props;
    if (onChange && !disabled) {
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

  onFocus = (event) => {
    const { onFocus } = this.props;
    if (onFocus) onFocus(event);
    this.setState({ focused: true });
  }

  onBlur = (event) => {
    const { target } = event;
    const { onBlur } = this.props;
    if (onBlur) onBlur(event);
    this.setState({ focused: false });
    this.completeInput(target);
  }

  render() {
    const {
      focused,
      inputValue: inputValueFromState,
    } = this.state;
    const {
      className,
      label,
      error,
      disabled,
      value,
      inputValue = inputValueFromState,
      placeholder,
    } = this.props;
    const classList = classes([
      'ui-component ui-tags-field',
      disabled && 'ui-disabled',
      focused && 'ui-focused',
      error && 'ui-with-error',
      className
    ]);
    const tags = Array.isArray(value) ? value : [];
    return (
      <div className={classList}>
        {label ? (
          <div className="ui-label">{label}</div>
        ) : null}
        <div className="ui-tags-field-content" onClick={this.onClick}>
          {tags.map((tag, i) => (
            <Tag
              key={tag.label || tag}
              value={tag}
              index={i}
              onRemove={this.onRemove}
            />
          ))}
          <input
            ref="input"
            value={inputValue}
            disabled={disabled}
            onChange={this.onInputChange}
            onKeyPress={this.onInputKeyPress}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }
}

export default TagsField;
