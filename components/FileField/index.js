import './style.scss';

import React, { PureComponent } from 'react';
import { classes } from '../utils';

export const FILES_COUNT_ERROR = 'FILES_COUNT_ERROR';
export const FILE_TYPE_ERROR = 'FILE_TYPE_ERROR';
export const FILE_SIZE_ERROR = 'FILE_SIZE_ERROR';

class FileField extends PureComponent {
  changeHandler = (event) => {
    const { target } = event;
    const {
      multiple,
      fileTypes,
      maxSize,
      onError,
    } = this.props;
    const files = [...target.files];
    if (!files.length) return null;
    if (!multiple && files.length > 1) {
      if (onError) return onError(FILES_COUNT_ERROR);
    }
    if (fileTypes) {
      const types = fileTypes.split(',').map(type => type.trim());
      for (let i = 0; i < files.length; i++) {
        const { name } = files[i];
        if (!types.some(type => name.endsWith(type))) {
          if (onError) return onError(FILE_TYPE_ERROR);
        }
      }
    }
    if (maxSize) {
      for (let i = 0; i < files.length; i++) {
        const { size } = files[i];
        if (size > maxSize) {
          if (onError) return onError(FILE_SIZE_ERROR);
        }
      }
    }
    const { onChange } = this.props;
    if (onChange) onChange(files, event);
  }

  render() {
    const {
      children,
      className,
      fileTypes,
      maxSize,
      onChange,
      error,
      disabled,
      ...props
    } = this.props;
    const classList = classes({
      'ui-component ui-file-field': true,
      'error-state': error,
      'ui-disabled': disabled,
      [className]: className,
    });
    if (fileTypes) props.accept = fileTypes;
    return (
      <div className={classList}>
        <div className="ui-file-field-content">{children}</div>
        <input type="file" onChange={this.changeHandler} disabled={disabled} {...props} />
      </div>
    );
  }
}

export default FileField;
