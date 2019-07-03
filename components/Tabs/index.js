import React, { PureComponent } from 'react';
import { classes } from '../utils';
import TabList from '../TabList';

class Tabs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { index: props.active || 0 };
  }

  componentWillReceiveProps({ active: newActive }) {
    const { active } = this.props;
    if (newActive !== active) {
      this.setState({ index: newActive });
    }
  }

  renderChildren() {
    const { children } = this.props;
    const { index } = this.state;
    let i = 0;
    return React.Children.map(children, child => React.cloneElement(child, {
      changeIndex: this.changeIndex,
      active: (child.type !== TabList) && (index === i++),
      index,
    }));
  }

  changeIndex = (index) => {
    const { onChange } = this.props;
    this.setState({ index }, () => onChange && onChange(index));
  }

  render() {
    const { className } = this.props;
    const classList = classes({
      'ui-tabs': true,
      [className]: className,
    });
    return (
      <div className={classList}>{this.renderChildren()}</div>
    );
  }
}

export default Tabs;
