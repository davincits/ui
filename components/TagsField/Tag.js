import './style.scss';

import React, { PureComponent } from 'react';
import IconClose from '../icons/Close';

class Tag extends PureComponent {
  onRemove = () => {
    const { index, onRemove } = this.props;
    onRemove(index);
  };

  render() {
    const { value } = this.props;
    return (
      <div className="ui-tags-field-tag">
        <div className="ui-tags-field-tag-content">{value.label || value}</div>
        <div className="ui-tags-field-tag-remove" onClick={this.onRemove}>
          <IconClose />
        </div>
      </div>
    );
  }
}

export default Tag;
