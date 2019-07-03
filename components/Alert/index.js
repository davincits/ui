import React, { PureComponent } from 'react';
import { bool } from 'prop-types';
import { classes } from '../utils';
import IconClose from '../icons/Close';

import './styles.scss';

class Alert extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      showed: true,
      display: true,
    };
  }

  onCloseClick = () => {
    const { onClose } = this.props;
    this.setState({ showed: false });
    setTimeout(() => {
      this.setState({ display: false }, () => {
        if (onClose) onClose();
      });
    }, 300);
  }

  render() {
    const {
      className,
      children,
      closeable,
    } = this.props;
    const { showed, display } = this.state;
    const classList = classes({
      'ui-alert': true,
      'ui-showed': showed,
      [className]: className,
    });
    return display && (
      <div className={classList}>
        {closeable && (<span className="ui-close" onClick={this.onCloseClick}><IconClose /></span>)}
        <div className="ui-alert-content">{children}</div>
      </div>
    );
  }
}

Alert.propTypes = {
  closeable: bool,
};

Alert.defaultProps = {
  closeable: true,
};

export default Alert;
