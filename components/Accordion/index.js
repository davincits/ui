import './style.scss';

import React, { PureComponent, Children, cloneElement } from 'react';
import { classes } from '../utils';
import Toggle from './Toggle';
import Collapse from './Collapse';
import Title from './Title';

class Accordion extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }

  handleChangeIndex = (index) => {
    this.setState({ index });
  }

  render() {
    const {
      className,
      children,
    } = this.props;
    const { index } = this.state;
    let toggleIndex = 0;
    let collapseIndex = 0;
    return (
      <div className={classes(['ui-component ui-accordion', className])}>
        {Children.map(children, (child) => {
          if (child.type === Toggle) {
            return cloneElement(child, {
              onChangeIndex: this.handleChangeIndex,
              index: toggleIndex,
              active: index === toggleIndex++,
            });
          }
          if (child.type === Collapse) {
            return cloneElement(child, { active: index === collapseIndex++ });
          }
          return child;
        })}
      </div>
    );
  }
}

Accordion.Toggle = Toggle;
Accordion.Collapse = Collapse;
Accordion.Title = Title;

export default Accordion;
