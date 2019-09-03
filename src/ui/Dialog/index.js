import './style.scss';

import React, { PureComponent } from 'react';
import Portal from '../Portal';
import IconClose from '../icons/Close';
import { classes } from '../utils';

const ESC_CODE = 'Escape';

class Dialog extends PureComponent {
  componentDidMount() {
    if (!document.body.__opened_modals__) {
      document.body.__opened_modals__ = 1;
    } else {
      document.body.__opened_modals__++;
    }
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', this.keyPressHandler);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyPressHandler);
    document.body.__opened_modals__--;
    if (document.body.__opened_modals__ > 0) return;
    document.body.style.overflow = '';
  }

  keyPressHandler = (event) => {
    if (event.code === ESC_CODE) {
      this.onClose();
    }
  };

  closeClickHandler = () => {
    this.onClose();
  };

  backDropClickHandler = (event) => {
    if (event.target === event.currentTarget) {
      this.onClose();
    }
  };

  onClose() {
    const { onClose, disabled } = this.props;
    if (onClose && !disabled) onClose();
  }

  render() {
    const {
      title,
      children,
      className,
      actions = [],
      disabled,
    } = this.props;
    const classList = classes({
      'ui-dialog': true,
      [className]: className,
      disabled,
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
              {actions.length
                ? React.Children.map(actions, (action, key) => (
                  React.cloneElement(action, { key })
                ))
                : actions}
            </div>
          </div>
        </div>
      </Portal>
    );
  }
}

export default Dialog;
