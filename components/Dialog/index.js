import React, { PureComponent } from 'react';
import Portal from '../Portal';
import IconClose from 'app/ui/icons/Close';
import { classes } from '../utils';

import './styles.scss';

const ESC_CODE = 'Escape';

class Dialog extends PureComponent {
  componentDidMount() {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', this.keyPressHandler);
  }

  componentWillUnmount() {
    document.body.style.overflow = '';
    window.removeEventListener('keydown', this.keyPressHandler);
  }

  keyPressHandler = (event) => {
    if (event.code === ESC_CODE) {
      this.onClose();
    }
  }

  closeClickHandler = () => {
    this.onClose();
  }

  backDropClickHandler = (event) => {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  }

  onClose() {
    const { onClose } = this.props;
    if (onClose) onClose();
  }

  render() {
    const {
      title,
      children,
      className,
      actions,
    } = this.props;
    const classList = classes({
      'ui-dialog': true,
      [className]: className,
    });
    return (
      <Portal>
        <div className={classList} onClick={this.backDropClickHandler}>
          <div className="ui-dialog-window">
            <div className="ui-dialog-header">
              <div className="ui-dialog-title">{title}</div>
              <div className="ui-dialog-close" onClick={this.closeClickHandler}>
                <IconClose />
              </div>
            </div>
            <div className="ui-dialog-content">{children}</div>
            <div className="ui-dialog-actions">
              {
                actions.length ? React.Children.map(actions, (action, key) => React.cloneElement(action, { key })) : actions
              }
            </div>
          </div>
        </div>
      </Portal>
    );
  }
}

export default Dialog;
