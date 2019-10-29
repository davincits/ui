import React, { PureComponent } from 'react';

export default class Container extends PureComponent {
  state = {}

  onChange = (value) => {
    this.setState({ value });
  }

  render() {
    const { children, width } = this.props;
    const { value } = this.state;
    return (
      <div className="content" style={{ width }}>
        {children({ value, onChange: this.onChange })}
      </div>
    );
  }
}
