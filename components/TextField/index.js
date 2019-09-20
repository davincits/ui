import './style.scss';

import React, { PureComponent } from 'react';
import { bool, string, func, element, oneOfType } from 'prop-types';
import { classes, uniqid } from '../utils';
import SearchIcon from '../icons/Search';
import CloseIcon from '../icons/Close';

const checkValue = value => (
  (value === null)
    || (value === undefined)
    || (typeof value === 'number' && isNaN(value)
    ) ? '' : value);

class TextField extends PureComponent {
  state = { height: null }

  onChange = (event) => {
    const { onChange } = this.props;
    if (onChange) onChange(event.target.value, event);
  };

  onBlur = (event) => {
    const { onBlur } = this.props;
    if (onBlur) onBlur(event.target.value, event);
  };

  onKeyDown = (event) => {
    const { onKeyDown } = this.props;
    if (onKeyDown) onKeyDown(event);
    const { target } = event;
    target.style.overflow = 'hidden';
    setTimeout(() => {
      target.style.height = 'auto';
      const height = `${target.scrollHeight}px`;
      target.style.height = height;
      if (
        target.scrollHeight > parseInt(getComputedStyle(target).maxHeight, 10)
      ) {
        target.style.overflow = '';
      }
      this.setState({ height });
    }, 0);
  };

  onResetClick = (event) => {
    const { onChange } = this.props;
    if (onChange) onChange('', event);
  };

  render() {
    const {
      className,
      label,
      multiline,
      resize = true,
      inline,
      onChange,
      onBlur,
      value: $value,
      type = 'text',
      autoheight = true,
      search,
      error,
      prefix,
      postfix,
      id = uniqid(),
      ...rest
    } = this.props;
    const { height } = this.state;
    const value = checkValue($value);
    const classList = classes({
      'ui-text-field': true,
      'ui-no-resize': !resize,
      'ui-inline': inline,
      'ui-type-search': search,
      'ui-state-error': error,
      [className]: className,
    });
    const props = {
      onChange: this.onChange,
      onBlur: this.onBlur,
      value,
      ...rest,
    };
    if (multiline && autoheight) {
      props.onKeyDown = this.onKeyDown;
    }
    return (
      <div className={classList}>
        {label ? (
          <label className="ui-label" htmlFor={id}>
            <div className="ui-ellipsis">{label}</div>
          </label>
        ) : null}
        {multiline ? (
          <div className="text-area-wrapper" style={{ height: height || 'auto' }}>
            <textarea {...props} id={id} />
            <div className="ui-text-field-stroke" />
          </div>
        ) : (
          <div className="ui-text-field-input-wrap">
            {prefix ? (<div className="ui-text-field-prefix">{prefix}</div>) : null}
            <input type={type} id={id} {...props} />
            {search ? (
              <div className="ui-text-field-postfix">
                {value ? (
                  <CloseIcon onClick={this.onResetClick} />
                ) : (
                  <SearchIcon />
                )}
              </div>
            ) : (
              postfix ? (<div className="ui-text-field-postfix">{postfix}</div>) : null
            )}
            <div className="ui-text-field-stroke" />
          </div>
        )}
      </div>
    );
  }
}

TextField.propTypes = {
  className: string,
  label: oneOfType([element, string]),
  type: string,
  inline: bool,
  multiline: bool,
  resize: bool,
  autoheight: bool,
  search: bool,
  error: bool,
  onChange: func,
  onBlur: func,
  prefix: oneOfType([element, string]),
  postfix: oneOfType([element, string]),
};

export default TextField;
