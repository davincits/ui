import './style.scss';

import React, { PureComponent } from 'react';
import Tooltip from './Tooltip';
import Portal from '../Portal';
import { classes } from '../utils';

const TOP = 'top';
const BOTTOM = 'bottom';
const LEFT = 'left';
const RIGHT = 'right';

class Container extends PureComponent {
  state = {
    opened: false,
    left: 0,
    top: 0,
  };

  onMouseEnter = ({ target }) => {
    const { place = TOP } = this.props;
    const {
      left, top, width, height,
    } = target.getBoundingClientRect();
    switch (place) {
      case RIGHT:
        this.setState({ left: left + width, top: top + height / 2 });
        break;
      case LEFT:
        this.setState({ left, top: top + height / 2 });
        break;
      case BOTTOM:
        this.setState({ left: left + width / 2, top: top + height });
        break;
      default:
        this.setState({ left: left + width / 2, top });
    }
    this.setState({ opened: true });
  }

  onMouseLeave = () => {
    this.setState({ opened: false });
  }

  render() {
    const {
      className,
      tooltip,
      place = TOP,
      children,
    } = this.props;
    const { opened, left, top } = this.state;
    return (
      <div
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        className={classes(['ui-tooltip-container', className])}
      >
        {children}
        {opened && (
          <Portal>
            <Tooltip className={`ui-tooltip-place-${place}`} left={left} top={top} checkPosition={[TOP, BOTTOM].includes(place)}>{tooltip}</Tooltip>
          </Portal>
        )}
      </div>
    );
  }
}

export default Container;
