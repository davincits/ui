import './style.scss';

import React, { PureComponent } from 'react';
import IconCloudBackup from 'app/ui/icons/CloudBackup';
import { ToastDanger } from 'app/ui/Toastr';
import { classes } from '../utils';

class DropArea extends PureComponent {
  state = {
    error: false,
    dragOver: false,
  }

  componentDidMount() {
    window.addEventListener('dragenter', this.dragEnterHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('dragenter', this.dragEnterHandler);
  }

  dragEnterHandler = () => {
    this.setState({ dragOver: true, error: false });
  }

  dragOverHandler = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy';
  }

  dragLeaveHandler = () => {
    this.setState({ dragOver: false });
  }

  dropHandler = (event) => {
    const { multiple, fileTypes, maxSize } = this.props;
    event.preventDefault();
    const files = event.dataTransfer.files;
    this.setState({ dragOver: false });
    if (!multiple && files.length > 1) {
      ToastDanger({ title: 'Only single file allowed' });
      return this.setState({ error: true });
    }
    if (fileTypes) {
      const types = fileTypes.split(',').map(type => type.trim());
      for (let i = 0; i < files.length; i++) {
        const { name } = files[i];
        const ext = name.split('.').pop();
        if (!types.includes(ext)) {
          ToastDanger({ title: 'File type is not allowed' });
          return this.setState({ error: true });
        }
      }
    }
    if (maxSize) {
      for (let i = 0; i < files.length; i++) {
        const { size } = files[i];
        if (size > maxSize) {
          ToastDanger({ title: 'File is to big!' });
          return this.setState({ error: true });
        }
      }
    }
    const { onChange } = this.props;
    if (onChange) onChange(files);
  }

  render() {
    const { children, className } = this.props;
    const { dragOver, error } = this.state;
    const classList = classes({
      'ui-drop-area': true,
      'drag-over': dragOver,
      'error-state': error,
      [className]: className,
    });
    return (
      <div className={classList}>
        {children}
        <div className="ui-drop-decoration"><IconCloudBackup /></div>
        <div
          onDragLeave={this.dragLeaveHandler}
          onDragOver={this.dragOverHandler}
          onDrop={this.dropHandler}
          className="ui-drop-element"
        />
      </div>
    );
  }
}

export default DropArea;
