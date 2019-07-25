import React, { PureComponent } from 'react';
import { bool, string } from 'prop-types';
import { classes } from '../utils';
import SearchIcon from '../icons/Search';
import CloseIcon from '../icons/Close';
import TextEllipsis from '../TextEllipsis';
import Label from '../Label';
import Show from '../Show';

import './styles.scss';

const checkValue = value =>
  (value === null ||
  value === undefined ||
  (typeof value === 'number' && isNaN(value))
    ? ''
    : value);

class TextField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { height: null };
  }

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

  onResetClick = () => {
    const { onChange } = this.props;
    if (onChange) onChange(event, '');
  };

  render() {
    const {
      className,
      label,
      multiline,
      resize,
      inline,
      onChange,
      onBlur,
      value: $value,
      type,
      autoheight,
      search,
      error,
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
    if (autoheight) {
      props.onKeyDown = this.onKeyDown;
    }
    return (
      <div className={classList}>
        <label>
          <Show if={label}>
            <Label>
              <TextEllipsis>{label}</TextEllipsis>
            </Label>
          </Show>
          {multiline ? (
            <div
              className="text-area-wrapper"
              style={{ height: height || 'auto' }}
            >
              <textarea {...props} />
            </div>
          ) : (
            <input type={type} {...props} />
          )}
          <Show if={search}>
            <SearchIcon />
            <Show if={value}>
              <CloseIcon onClick={this.onResetClick} />
            </Show>
          </Show>
        </label>
      </div>
    );
  }
}

TextField.propTypes = {
  type: string,
  resize: bool,
};

TextField.defaultProps = {
  type: 'text',
  resize: true,
};

export default TextField;
