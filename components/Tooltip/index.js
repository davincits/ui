import React, { PureComponent } from 'react';
import Tooltip from './Tooltip';
import { classes } from '../utils';

import './style.scss';

class Container extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { showed: false };
  }

  mouseEnterHandler = () => {
    this.setState({ showed: true });
  }

  mouseLeaveHandler = () => {
    this.setState({ showed: false });
  }

  render() {
    const { className, tooltip, children } = this.props;
    const { showed } = this.state;
    const classList = classes({
      'ui-tooltip-container': true,
      [className]: className,
    });
    return (
      <div
        className={classList}
        onMouseEnter={this.mouseEnterHandler}
        onMouseLeave={this.mouseLeaveHandler}
      >
        {children}
        {showed && <Tooltip>{tooltip}</Tooltip>}
      </div>
    );
  }
}

export default Container;
