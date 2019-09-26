import React, { Component } from 'react';
import CheckBox from '../CheckBox';

class Item extends Component {
  onClick = () => {
    const { value, onSelect } = this.props;
    if (onSelect) onSelect(value);
  }

  render() {
    const { label, selected } = this.props;
    return (
      <div className="ui-multiselect-item" onClick={this.onClick}>
        <CheckBox value={selected} />
        <span className="ui-multiselect-item-label">{label}</span>
      </div>
    );
  }
}

export default Item;
