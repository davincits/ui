import React, { PureComponent } from 'react';
import TextEllipsis from '../TextEllipsis';
import { classes } from '../utils';

import './styles.scss';

class Option extends PureComponent {
  onClick = () => {
    const { value, onClick } = this.props;
    onClick(value);
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
        <TextEllipsis>{label || value}</TextEllipsis>
      </div>
    );
  }
}

export default Option;
