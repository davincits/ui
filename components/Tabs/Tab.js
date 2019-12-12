import React, { PureComponent } from 'react';
import { classes } from '../utils';

class Tab extends PureComponent {
  clickHandler = (event) => {
    const { index, changeIndex, onClick } = this.props;
    changeIndex && changeIndex(index);
    if (onClick) onClick(event);
  }

  render() {
    const { className, active, children } = this.props;
    const classList = classes({
      'ui-component ui-tab': true,
      'ui-active': active,
      [className]: className,
    });
    return (
      <div className={classList} onClick={this.clickHandler}>{children}</div>
    );
  }
}

export default Tab;
