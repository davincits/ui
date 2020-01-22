import './style.scss';

import React, { PureComponent } from 'react';
import IconCloseFilled from "../icons/CloseFilled";
import { classes } from '../utils';

const ESC_CODE = 'Escape';

class FullSizeModal extends PureComponent {
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

  onClose = () => {
    const { onClose } = this.props;
    if (onClose) onClose();
  };

  keyPressHandler = ({ code }) => {
    const { onClose } = this.props;
    if (onClose && code === ESC_CODE) {
      onClose();
    }
  };

  resizeHandler = () => {
    this.detectFooterCovering();
  };

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

  render() {
    const {
      children,
      title,
      footer,
      subtitle,
      closeLabel = 'Close',
      className,
    } = this.props;
    return (
      <div className={classes(['ui-component component-full-size-modal', className])} onScroll={this.onScroll}>
        <div className="component-full-size-modal-header" ref="header">
          <div className="component-full-size-modal-header-main">
            <div className="component-full-size-modal-title">{title}</div>
            <div
              className="component-full-size-modal-close"
              onClick={this.onClose}
            >
              <span>{closeLabel}</span>
              <span className="component-full-size-modal-close-key">(esc)</span>
              <IconCloseFilled />
            </div>
          </div>
          {subtitle && <div className="component-full-size-modal-header-subtitle">{subtitle}</div>}
        </div>
        <div className="component-full-size-modal-content" ref="content">
          {children}
        </div>
        {footer && (
          <div className="component-full-size-modal-footer" ref="footer">
            {footer}
          </div>
        )}
      </div>
    );
  }
}

export default FullSizeModal;
