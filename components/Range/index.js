import './style.scss';

import React, { PureComponent } from 'react';
import { classes } from '../utils';

class Range extends PureComponent {
  getValue(value) {
    const { value: $value = [0, 100] } = this.props;
    let [first, second] = value || $value;
    const { min = 0, max = 100 } = this.props;
    first = Number(first);
    second = Number(second);
    if (isNaN(first)) first = min;
    if (isNaN(second)) second = max;
    if (first > second) {
      [first, second] = [second, first];
    }
    if (first < min) first = min;
    if (second > max) second = max;
    return [first, second];
  }

  onMouseDown = (event) => {
    const { value = [0, 100], disabled } = this.props;
    if (disabled) return;
    this.fullWidth = this.refs.track.getBoundingClientRect().width;
    this.clientXStart = event.clientX;
    this.sliderIndex = event.target.nextSibling ? 0 : 1;
    this.sliderLeftStart = value[this.sliderIndex];
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.cancelTracking);
    window.addEventListener('mouseleave', this.cancelTracking);
  }

  onMouseMove = (event) => {
    const {
      min = 0,
      max = 100,
      onChange,
    } = this.props;
    let [first, second] = this.getValue();
    const delta = max - min;
    const shift = (event.clientX - this.clientXStart) / this.fullWidth;
    let left = Math.round(this.sliderLeftStart + delta * shift);
    if (left < min) left = min;
    if (left > max) left = max;
    [first, second] = this.sliderIndex ? [first, left] : [left, second];
    onChange(this.getValue([first, second]));
  }

  onMouseUp = () => {
    if (!this.trackMouse) return;
    this.trackMouse = false;
  }

  cancelTracking = () => {
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.cancelTracking);
    window.removeEventListener('mouseleave', this.cancelTracking);
  }

  getStyles() {
    const { min = 0, max = 100 } = this.props;
    const [first, second] = this.getValue();
    const delta = max - min;
    const firstSliderLeft = (first - min) / delta * 100;
    const secondSliderLeft = (second - min) / delta * 100;
    const trackStyle = {
      left: `${firstSliderLeft}%`,
      right: `${100 - secondSliderLeft}%`,
    };
    const firstSliderStyle = {
      left: `${firstSliderLeft}%`,
    };
    const secondSliderStyle = {
      left: `${secondSliderLeft}%`,
    };
    return [
      trackStyle,
      firstSliderStyle,
      secondSliderStyle,
    ];
  }

  render() {
    const { className, disabled } = this.props;
    const classList = classes({
      'ui-component ui-range': true,
      'ui-disabled': disabled,
      [className]: className,
    });
    const [
      trackStyle,
      firstSliderStyle,
      secondSliderStyle,
    ] = this.getStyles();
    return (
      <div className={classList}>
        <div className="ui-range-track" ref="track">
          <div className="ui-range-track-active" style={trackStyle} />
          <div className="ui-range-slider" style={firstSliderStyle} onMouseDown={this.onMouseDown} />
          <div className="ui-range-slider" style={secondSliderStyle} onMouseDown={this.onMouseDown} />
        </div>
      </div>
    );
  }
}

export default Range;
