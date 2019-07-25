import React, { PureComponent } from 'react';
import { classes } from '../utils';

import './styles.scss';

class Tab extends PureComponent {
  clickHandler = () => {
    const { index, changeIndex } = this.props;
    changeIndex && changeIndex(index);
  }

  render() {
    const { className, active, children } = this.props;
    const classList = classes({
      'ui-tab': true,
      'ui-active': active,
      [className]: className,
    });
    return (
      <div className={classList} onClick={this.clickHandler}>{children}</div>
    );
  }
}

export default Tab;
