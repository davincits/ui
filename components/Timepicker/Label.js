import React, { PureComponent } from 'react';

class Label extends PureComponent {
  onClick = () => {
    const { value, onClick } = this.props;
    onClick(value);
  }

  render() {
    const {
      label,
      position,
      inner,
      type,
      selected,
    } = this.props;
    const classList = [`ui-timepicker-${type}-label position-${position}`];
    if (inner) classList.push('inner');
    if (selected) classList.push('selected');
    return (
      <div className={classList.join(' ')}>
        <span onClick={this.onClick}>{label}</span>
      </div>
    );
  }
}

export default Label;
