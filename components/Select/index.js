import "./style.scss";

import React, { memo, useCallback, useMemo, useRef, useState } from "react";
import { classNames, isString } from "../utils";
import DropDown from "../DropDown";
import TextField from "../TextField";
import Option from "./Option";

const Select = memo(({
  className,
  value,
  label,
  options,
  disabled,
  error,
  placeholder,
  inline = false,
  search,
  nothingFoundtext = "Nothing found",
  onChange,
  ...props
}) => {
  const dropdownRef = useRef();
  const [searchString, setSearchString] = useState();
  const classList = useMemo(() => classNames({
    "ui-component ui-select": true,
    "ui-with-error": error,
    [className]: className,
  }), [error, className]);
  const selected = useMemo(() => options.filter((i) => i).find(({ value: val }) => val === value), [options, value]);
  const filteredOptions = useMemo(() => {
    if (!search || !searchString) return options;
    const lowercased = searchString.toLowerCase();
    return options.filter((item) => item.label.toLowerCase().search(lowercased) > -1);
  }, [options, search, searchString]);

  const placeholderText = useMemo(() => (
    <div className="ui-placeholder">{placeholder}</div>
  ), [placeholder]);

  const handleOptionClick = useCallback((value) => {
    if (onChange) onChange(value);
    dropdownRef.current?.setState({ opened: false });
  }, [onChange]);

  return (
    <div className={classList} {...props}>
      <DropDown
        label={label}
        buttonContent={selected ? (selected.label || selected.value) : placeholderText}
        disabled={disabled}
        inline={inline}
        name="ui-select"
        ref={dropdownRef}>
        {search && (
          <div className="ui-select-search-container">
            <TextField
              value={searchString}
              onChange={setSearchString}
              search autoFocus />
          </div>
        )}
        <div className="ui-select-scroll-content">
          {filteredOptions.filter(Boolean).map((opt) => (
            <Option
              key={opt.value}
              onClick={handleOptionClick}
              selected={opt.value === value}
              label={opt.label}
              value={opt.value} />
          ))}
          {searchString && !!options.length && !filteredOptions.length && (
            <div className="ui-select-empty-state">
              {nothingFoundtext}
            </div>
          )}
        </div>
      </DropDown>
      {isString(error) && (
        <div className="ui-error-text">{error}</div>
      )}
    </div>
  );
});

export default Select;
