import './style.scss';

import React, { PureComponent } from 'react';
import { classes } from '../utils';
import IconClose from '../icons/Close';

const DEFAULT_DELAY = 300;

class Alert extends PureComponent {
  state = {
    showed: true,
    display: true,
  }

  onCloseClick = () => {
    const { onClose, delay = DEFAULT_DELAY } = this.props;
    this.setState({ showed: false });
    setTimeout(() => {
      this.setState({ display: false });
      if (onClose) onClose();
    }, delay || 0);
  }

  render() {
    const {
      className,
      children,
      closeable = true,
      ...props
    } = this.props;
    const { showed, display } = this.state;
    return display && (
      <div className={classes(['ui-component ui-alert', showed && 'ui-showed', className])} {...props}>
        {closeable && (
          <div className="ui-close" onClick={this.onCloseClick}>
            <IconClose />
          </div>
        )}
        <div className="ui-alert-content">
          {children}
        </div>
      </div>
    );
  }
}

export default Alert;
