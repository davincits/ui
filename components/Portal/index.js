import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Portal extends Component {
  componentDidMount() {
    this.renderPortal();
  }

  componentDidUpdate() {
    this.renderPortal();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.node);
    if (this.node) {
      document.body.removeChild(this.node);
    }
    this.node = null;
    this.portal = null;
  }

  renderPortal() {
    let { children } = this.props;
    if (!this.node) {
      this.node = document.createElement('div');
      document.body.appendChild(this.node);
    }
    if (typeof children.type === 'function') {
      children = React.cloneElement(children);
    }
    this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(
      this,
      children,
      this.node,
    );
  }

  render() {
    return null;
  }
}
