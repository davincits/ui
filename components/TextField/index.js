import "./style.scss";

import React, { PureComponent } from "react";
import {
  bool, string, func, element, oneOfType,
} from "prop-types";
import { classes, uniqid } from "../utils";
import SearchIcon from "../icons/Search";
import CloseIcon from "../icons/Close";

const REGEXP_NATURAL = /^\d*$/;
const REGEXP_NUMBER = /^[+-]?(0|\d*)\.?\d*$/;

class TextField extends PureComponent {
  constructor(props, context) {
    super(props, context);
    this.state = { height: null };
  }

  onChange = (event) => {
    const { value } = event.target;
    const { onChange, number, natural } = this.props;
    if (!onChange) return;
    if (natural && !REGEXP_NATURAL.test(value)) {
      return;
    }
    if (number && !REGEXP_NUMBER.test(value)) {
      return;
    }
    onChange(value, event);
  };

  onBlur = (event) => {
    const { onBlur } = this.props;
    if (onBlur) onBlur(event.target.value, event);
  };

  onKeyDown = (event) => {
    const { onKeyDown } = this.props;
    if (onKeyDown) onKeyDown(event);
    const { target } = event;
    target.style.overflow = "hidden";
    setTimeout(() => {
      target.style.height = "auto";
      const height = `${target.scrollHeight}px`;
      target.style.height = height;
      if (
        target.scrollHeight > parseInt(getComputedStyle(target).maxHeight, 10)
      ) {
        target.style.overflow = "";
      }
      this.setState({ height });
    }, 0);
  };

  onResetClick = (event) => {
    const { onChange } = this.props;
    if (onChange) onChange("");
  };

  render() {
    const {
      className,
      label,
      multiline,
      resize = true,
      inline,
      onChange,
      onBlur,
      type = "text",
      autoheight = true,
      search,
      errorText,
      error = !!errorText,
      id = uniqid(),
      natural,
      floatedLabel,
      value,
      ...rest
    } = this.props;
    const { height } = this.state;
    const classList = classes({
      "ui-component ui-text-field": true,
      "ui-no-resize": !resize,
      "ui-inline": inline,
      "ui-type-search": search,
      "ui-state-error": error,
      "ui-with-floated-label": !!floatedLabel,
      "ui-text-field-filled": !!value,
      [className]: className,
    });
    const props = {
      onChange: this.onChange,
      onBlur: this.onBlur,
      value,
      ...rest,
    };
    if (multiline && autoheight) {
      props.onKeyDown = this.onKeyDown;
    }
    return (
      <div className={classList}>
        {label ? (
          <label className="ui-label" htmlFor={id}>{label}</label>
        ) : null}
        {multiline ? (
          <div className="ui-text-area-wrapper" style={{ height: height || "auto" }}>
            <textarea {...props} id={id} />
          </div>
        ) : (
          <div className="ui-text-field-input-wrap">
            <input type={type} id={id} {...props} />
            {search ? (
              value
              ? (<CloseIcon onClick={this.onResetClick} />)
              : (<SearchIcon />)
            ) : null}
            {!!floatedLabel && (
              <div className="floated-label">{floatedLabel}</div>
            )}
          </div>
        )}
        {!!errorText && (
          <div className="error-text">{errorText}</div>
        )}
      </div>
    );
  }
}

TextField.propTypes = {
  className: string,
  label: oneOfType([element, string]),
  type: string,
  inline: bool,
  multiline: bool,
  resize: bool,
  autoheight: bool,
  search: bool,
  error: bool,
  onChange: func,
  onBlur: func,
};

export default TextField;
