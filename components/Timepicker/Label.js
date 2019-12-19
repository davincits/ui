import React, { PureComponent } from 'react';

class Label extends PureComponent {
  onClick = () => {
    const { value, disabled, onClick } = this.props;
    if (!disabled) onClick(value);
  }

  render() {
    const {
      label,
      position,
      inner,
      type,
      selected,
      disabled,
    } = this.props;
    const classList = [`ui-timepicker-${type}-label position-${position}`];
    if (inner) classList.push('inner');
    if (selected) classList.push('selected');
    if (disabled) classList.push('disabled');
    return (
      <div className={classList.join(' ')}>
        <span onClick={this.onClick}>{label}</span>
      </div>
    );
  }
}

export default Label;
