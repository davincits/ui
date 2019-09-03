import './style.scss';

import React, { PureComponent } from 'react';
import { classes } from '../utils';

class FileField extends PureComponent {
  state = { error: false }

  changeHandler = ({ target: { files } }) => {
    const { multiple, fileTypes, maxSize } = this.props;
    if (!files.length) return null;
    if (!multiple && files.length > 1) {
      // ToastDanger({ title: 'Only single file allowed' });
      return this.setState({ error: true });
    }
    if (fileTypes) {
      const types = fileTypes.split(',').map(type => type.trim());
      for (let i = 0; i < files.length; i++) {
        const { name } = files[i];
        const ext = name.split('.').pop();
        if (!types.includes(ext)) {
          // ToastDanger({ title: 'File type is not allowed' });
          return this.setState({ error: true });
        }
      }
    }
    if (maxSize) {
      for (let i = 0; i < files.length; i++) {
        const { size } = files[i];
        if (size > maxSize) {
          // ToastDanger({ title: 'File is to big!' });
          return this.setState({ error: true });
        }
      }
    }
    const { onChange } = this.props;
    if (onChange) onChange(files);
  }

  render() {
    const {
      children,
      className,
      fileTypes,
      maxSize,
      onChange,
      ...props
    } = this.props;
    const { error } = this.state;
    const classList = classes({
      'ui-file-field': true,
      'error-state': error,
      [className]: className,
    });
    return (
      <div className={classList}>
        <div className="ui-file-field-content">{children}</div>
        <input type="file" onChange={this.changeHandler} {...props} />
      </div>
    );
  }
}

export default FileField;
