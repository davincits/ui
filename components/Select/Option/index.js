import './style.scss';

import React, { PureComponent } from 'react';
import { classes } from '../../utils';

class Option extends PureComponent {
  onClick = () => {
    const { value, selected, onClick } = this.props;
    if (!selected) onClick(value);
  };

  render() {
    const {
      className, value, label, selected,
    } = this.props;
    const classList = classes({
      'ui-option': true,
      'ui-selected': selected,
      [className]: className,
    });
    return (
      <div className={classList} onClick={this.onClick}>
        <div className="ui-ellipsis">{label || value}</div>
      </div>
    );
  }
}

export default Option;
