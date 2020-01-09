import React, { PureComponent } from 'react';
import Portal from '../Portal';

export default function getContainer({ item: Item, store, className }) {
  class Container extends PureComponent {
    constructor(props, context) {
      super(props, context);
      this.state = { items: [] };
      this.unsubscribe = store.on('change', this.onStoreChange);
    }

    componentWillUnmount() {
      this.unsubscribe();
    }

    onStoreChange = () => {
      const { items } = store;
      this.setState({ items });
    };

    render() {
      const { items } = this.state;
      return (
        <Portal>
          <div className={`ui-component ${className}`}>
            {items.map((item) => (<Item key={item.uid} {...item} />))}
          </div>
        </Portal>
      );
    }
  }

  return Container;
}
