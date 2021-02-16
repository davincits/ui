import "./style.scss";

import React, { PureComponent } from "react";
import { classes, uniqid, isString } from "../utils";
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
<<<<<<< HEAD
    const { onChange, number, natural } = this.props;
    if (!onChange) return;
    if (natural && !REGEXP_NATURAL.test(value)) {
      return;
    }
    if (number && !REGEXP_NUMBER.test(value)) {
      return;
    }
    onChange(value, event);
=======
    const { onChange, type, natural } = this.props;
    if (!onChange) return;
    if ((type !== FIELD_TYPE_NUMBER) || !value) {
      onChange(value, event);
      return;
    }
    if (isNaN(value)) return;
    const number = Number(value);
    if (natural) {
      onChange(Math.max(0, parseInt(value, 10)), event);
      return;
    }
    onChange(Number(value), event);
>>>>>>> e2ade77316d111b4b7be2e0e0803de426319dd60
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
<<<<<<< HEAD
      value,
=======
>>>>>>> e2ade77316d111b4b7be2e0e0803de426319dd60
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
<<<<<<< HEAD
            {!!floatedLabel && (
              <div className="floated-label">{floatedLabel}</div>
            )}
          </div>
        )}
        {!!errorText && (
          <div className="error-text">{errorText}</div>
=======
            {floatedLabel ? (
              <label className="floated-label" htmlFor={id}>{floatedLabel}</label>
            ) : null}
          </div>
        )}
        {isString(error) && (
          <div className="ui-error-text">{error}</div>
>>>>>>> e2ade77316d111b4b7be2e0e0803de426319dd60
        )}
      </div>
    );
  }
}

export default TextField;
