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
    window.addEventListener('resize', this.resizeHandler);
    this.detectFooterCovering();
    setTimeout(() => this.detectFooterCovering(), 200);
  }

  componentDidUpdate() {
    this.detectFooterCovering();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyPressHandler);
    window.removeEventListener('resize', this.resizeHandler);
    document.body.__opened_modals__--;
    if (document.body.__opened_modals__ > 0) return;
    document.body.style.overflow = '';
  }

  resizeHandler = () => {
    this.detectFooterCovering();
  }

  detectFooterCovering() {
    const { content, footer } = this.refs;
    if (!content || !footer) return null;
    const { scrollHeight, scrollTop, offsetHeight } = content;
    if (footer) {
      if (Math.ceil(offsetHeight + scrollTop) === scrollHeight) {
        footer.classList.remove('with-shadow');
      } else {
        footer.classList.add('with-shadow');
      }
    }
  }

  onScroll = (event) => {
    const { header } = this.refs;
    if (event.target.scrollTop) {
      header.classList.add('with-shadow');
    } else {
      header.classList.remove('with-shadow');
    }
    this.detectFooterCovering();
  };

  keyPressHandler = (event) => {
    if (event.code === ESC_CODE) {
      this.onClose();
    }
  };

  closeClickHandler = () => {
    this.onClose();
  };

  backDropClickHandler = () => {
    if (this.clickStartOnDialogContent) {
      this.clickStartOnDialogContent = false;
    } else {
      this.onClose();
    }
  };

  onClose() {
    const { onClose, disabled } = this.props;
    if (onClose && !disabled) onClose();
  }

  mouseDownHandler = () => {
    this.clickStartOnDialogContent = true;
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
        <div className={classList} onClick={this.backDropClickHandler} onScroll={this.onScroll}>
          <div className="ui-dialog-window" onMouseDown={this.mouseDownHandler}>
            <div className="ui-dialog-header" ref="header">
              <div className="ui-dialog-title">{title}</div>
              <div className="ui-dialog-close" onClick={this.closeClickHandler}>
                <IconClose />
              </div>
            </div>
            <div className="ui-dialog-content" ref="content">{children}</div>
            <div className="ui-dialog-actions" ref="footer">
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
