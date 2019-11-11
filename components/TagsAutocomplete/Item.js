import React, { Component } from 'react';

class Item extends Component {
  onClick = () => {
    const { value, onClick } = this.props;
    if (!onClick) return;
    onClick(value);
  }

  render() {
    const { value } = this.props;
    return (
      <div
        onClick={this.onClick}
        className="ui-tags-autocomplete-item"
      >
        {value.label || value}
      </div>
    );
  }
}

export default Item;
