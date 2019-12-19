import "./style.scss";

import React, { PureComponent } from "react";
import {
  bool, string, func, element, oneOfType,
} from "prop-types";
import { classes, uniqid } from "../utils";
import SearchIcon from "../icons/Search";
import CloseIcon from "../icons/Close";

const FIELD_TYPE_TEXT = "text";
const FIELD_TYPE_NUMBER = "number";
const normalizeFieldType = (type) => ((type === FIELD_TYPE_NUMBER) ? FIELD_TYPE_TEXT : type);

const checkValue = (value) => (
  (value === null) || (value === undefined) || (value !== value) ? "" : value // eslint-disable-line no-self-compare
);

class TextField extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { height: null };
  }

  onChange = (event) => {
    const { value } = event.target;
    const { onChange, type, natural } = this.props;
    const isNumberType = type === FIELD_TYPE_NUMBER;
    if (onChange && (!isNumberType || (value === "") || !isNaN(value))) {
      if (natural) {
        return onChange(Math.abs(parseInt(value, 10)), event);
      }
      onChange(value, event);
    }
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
    if (onChange) onChange("", event);
  };

  onPlusClick = () => {
    const { value, onChange } = this.props;
    if (onChange) {
      onChange((isNaN(value) ? 0 : Number(value)) + 1);
    }
  }

  onMinusClick = () => {
    const { value, natural, onChange } = this.props;
    if (onChange && !isNaN(value) && (!natural || Number(value) > 1)) {
      onChange(Number(value) - 1);
    }
  }

  control() {
    const { search, value, type } = this.props;
    if (search) {
      return value
        ? (<CloseIcon onClick={this.onResetClick} />)
        : (<SearchIcon />);
    }
    return type === FIELD_TYPE_NUMBER ? [
      (<div key="plus" className="ui-text-field-number-control-plus" onClick={this.onPlusClick} />),
      (<div key="minus" className="ui-text-field-number-control-minus" onClick={this.onMinusClick} />),
    ] : null;
  }

  render() {
    const {
      className,
      label,
      multiline,
      resize = true,
      inline,
      onChange,
      onBlur,
      value: $value,
      type = FIELD_TYPE_TEXT,
      autoheight = true,
      search,
      error,
      id = uniqid(),
      natural,
      ...rest
    } = this.props;
    const { height } = this.state;
    const value = checkValue($value);
    const classList = classes({
      "ui-component ui-text-field": true,
      "ui-no-resize": !resize,
      "ui-inline": inline,
      "ui-type-search": search,
      "ui-state-error": error,
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
          <label className="ui-label" htmlFor={id}>
            <div className="ui-ellipsis">{label}</div>
          </label>
        ) : null}
        {multiline ? (
          <div className="ui-text-area-wrapper" style={{ height: height || "auto" }}>
            <textarea {...props} id={id} />
          </div>
        ) : (
          <div className="ui-text-field-input-wrap">
            <input type={normalizeFieldType(type)} id={id} {...props} />
            {this.control()}
          </div>
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
