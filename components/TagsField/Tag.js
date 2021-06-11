import "./style.scss";

import React, { PureComponent } from "react";
import IconClose from "../icons/Close";

class Tag extends PureComponent {
  handleClick = () => {
    const { index, onRemove } = this.props;
    onRemove(index);
  };

  render() {
    const { value, disabled } = this.props;
    const content = value.label || value;
    return (
      <div className="ui-tags-field-tag">
        <div className="ui-tags-field-tag-content" title={content}>{content}</div>
        {!disabled && (
          <div className="ui-tags-field-tag-remove" onClick={this.handleClick}>
            <IconClose />
          </div>
        )}
      </div>
    );
  }
}

export default Tag;
