import React, { PureComponent } from 'react';
import Portal from '../Portal';
import Item from './Item';
import Store from './Store';
import { classes } from '../utils';

import './styles.scss';

class Container extends PureComponent {
  constructor() {
    super();
    this.state = { toasts: [] };
  }

  componentWillMount() {
    this.unsubscribe = Store.on('change', this.toastrStoreChangeCallback);
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  toastrStoreChangeCallback = () => {
    const { toasts } = Store;
    this.setState({ toasts });
  };

  render() {
    const { className } = this.props;
    const { toasts } = this.state;
    const classList = classes({
      'ui-toaster-container': true,
      [className]: className
    });
    return (
      <Portal>
        <div className={classList}>
          {toasts.map(toast => (
            <Item key={toast.uid} {...toast} />
          ))}
        </div>
      </Portal>
    );
  }
}

export default Container;
