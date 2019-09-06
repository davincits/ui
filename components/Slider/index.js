import '../Range/style.scss';
import './style.scss';

import React, { PureComponent } from 'react';
import { number, func } from 'prop-types';
import { classes } from '../utils';

class Slider extends PureComponent {
  getValue(value) {
    const { value: $value } = this.props;
    if (value === undefined) {
      value = $value;
    }
    const { min, max } = this.props;
    value = Number(value);
    if (isNaN(value)) value = min;
    if (value < min) return min;
    if (value > max) return max;
    return value;
  }

  onMouseDown = (event) => {
    const { value } = this.props;
    this.tracking = true;
    this.fullWidth = this.refs.track.getBoundingClientRect().width;
    this.clientXStart = event.clientX;
    this.sliderStart = Number(value);
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.cancelTracking);
    window.addEventListener('mouseleave', this.cancelTracking);
  }

  onMouseMove = (event) => {
    if (!this.tracking) return null;
    const { min, max, onChange } = this.props;
    const delta = max - min;
    const shift = (event.clientX - this.clientXStart) / this.fullWidth;
    let value = Math.round(this.sliderStart + delta * shift);
    if (value < min) value = min;
    if (value > max) value = max;
    onChange(value);
  }

  cancelTracking = () => {
    this.tracking = false;
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.cancelTracking);
    window.removeEventListener('mouseleave', this.cancelTracking);
  }

  onClick = (event) => {
    event.stopPropagation();
    const { min, max, onChange } = this.props;
    const delta = max - min;
    const bounding = this.refs.track.getBoundingClientRect();
    const position = (event.clientX - bounding.left) / bounding.width;
    let value = Math.round(delta * position + min);
    if (value < min) value = min;
    if (value > max) value = max;
    onChange(value);
  }

  getStyles() {
    const { min, max } = this.props;
    const value = this.getValue();
    const delta = max - min;
    const sliderLeft = (value - min) / delta * 100;
    const trackStyle = {
      left: '0%',
      right: `${100 - sliderLeft}%`,
    };
    const sliderStyle = {
      left: `${sliderLeft}%`,
    };
    return [trackStyle, sliderStyle];
  }

  render() {
    const { className } = this.props;
    const classList = classes({
      'ui-range': true,
      'ui-slider': true,
      [className]: className,
    });
    const [trackStyle, sliderStyle] = this.getStyles();
    return (
      <div className={classList} onClick={this.onClick}>
        <div className="ui-range-track" ref="track">
          <div className="ui-range-track-active" style={trackStyle} />
          <div className="ui-range-slider" style={sliderStyle} onMouseDown={this.onMouseDown} />
        </div>
      </div>
    );
  }
}

Range.propTypes = {
  min: number,
  max: number,
  value: number,
  onChange: func,
};

Range.defaultProps = {
  min: 0,
  max: 100,
  value: 100,
  onChange: () => { },
};

export default Slider;
