import './style.scss';

import React, { PureComponent } from 'react';
import { classes } from '../utils';
import Tag from './Tag';

const KEY_NAMES = ['Enter', ',', ' '];

class TagsField extends PureComponent {
  state = {
    inputValue: '',
    focused: false,
  };

  onInputChange = (event) => {
    const { onInputChange } = this.props;
    const { target: { value: inputValue } } = event;
    this.setState({ inputValue });
    if (onInputChange) onInputChange(inputValue);
  };

  onInputKeyPress = (event) => {
    const { key, target } = event;
    const {
      value, onChange, onInputChange, noCustom,
    } = this.props;
    const inputValue = target.value.trim();
    const inputValues = inputValue ? inputValue.replace(/(?:\s*,\s*|\s+)/g, ",").split(",") : [];
    if (KEY_NAMES.includes(key) && inputValues.length && onChange && !noCustom) {
      const uniqValues = inputValues.filter((item) => !(value || []).includes(item));
      console.log(uniqValues);
      onChange(Array.isArray(value) ? [...value, ...uniqValues] : uniqValues);
      if (onInputChange) onInputChange('');
      event.preventDefault();
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

  onFocus = (event) => {
    const { onFocus } = this.props;
    if (onFocus) onFocus(event);
    this.setState({ focused: true });
  }

  onBlur = (event) => {
    const { onBlur } = this.props;
    if (onBlur) onBlur(event);
    this.setState({ focused: false });
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
    const classList = classes({
      'ui-component ui-tags-field': true,
      'ui-disabled': disabled,
      'ui-focused': focused,
      'ui-tags-field-error': error,
      [className]: className,
    });
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
