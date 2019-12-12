import './style.scss';

import React, { PureComponent, Children, cloneElement } from 'react';
import { classes } from '../utils';
import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';

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

  changeIndex = (index) => {
    const { onChange } = this.props;
    this.setState({ index });
    if (onChange) onChange(index);
  }

  renderChildren() {
    const { children } = this.props;
    const { index } = this.state;
    let i = 0;
    return Children.map(children, child => cloneElement(child, {
      changeIndex: this.changeIndex,
      active: (child.type !== TabList) && (index === i++),
      index,
    }));
  }

  render() {
    const { className } = this.props;
    const classList = classes({
      'ui-component ui-tabs': true,
      [className]: className,
    });
    return (
      <div className={classList}>{this.renderChildren()}</div>
    );
  }
}

Tabs.Tab = Tab;
Tabs.TabList = TabList;
Tabs.TabPanel = TabPanel;

export default Tabs;
