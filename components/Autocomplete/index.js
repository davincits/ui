import "./style.scss";

import React, { memo, useCallback, useRef } from "react";

import { classNames } from "../utils";
import DropDown from "../DropDown";
import TextField from "../TextField";
import Loading from "../LoadingDotted";
import List from "../List";

const Autocomplete = memo((props) => {
  const {
    className,
    notFoundText = "Nothing was found...",
    items,
    label,
    value = "",
    loading,
    disabled,
    placeholder,
    autoComplete = "no",
    onSelect,
    onChange,
  } = props;
  const dropdownRef = useRef();

  const handleSelect = useCallback((val) => {
    onChange(val);
    if (onSelect) onSelect(val);
    if (!dropdownRef.current) return;
    dropdownRef.current.setState({ opened: false });
  }, [onChange, onSelect]);

  const handleFocus = useCallback(() => {
    if (!dropdownRef.current) return;
    dropdownRef.current.setState({ opened: true });
    dropdownRef.current.checkPosition();
  }, []);

  const handleChange = useCallback((val, event) => {
    if (!dropdownRef.current) return;
    if (!dropdownRef.current.state.opened) {
      dropdownRef.current.setState({ opened: true });
      dropdownRef.current.checkPosition();
    }
    if (onChange) onChange(val, event);
  }, [onChange]);

  return (
    <div className={classNames(["ui-component ui-autocomplete", className])}>
      <DropDown
        button={(
          <TextField
            label={label}
            value={value}
            onChange={handleChange}
            onFocus={handleFocus}
            disabled={disabled}
            placeholder={placeholder}
            autoComplete={autoComplete}
            search />
        )}
        disabled={disabled}
        ref={dropdownRef}
        name="ui-autocomplete"
        manual>
        <div className="ui-autocomplete-items">
          {items
            ? (
              items.length
                ? (
                  <List items={items} onClick={handleSelect} />
                ) : (
                  <List items={[notFoundText]} notActive />
                )
            ) : (loading && (
              <List items={[<Loading key={0} />]} notActive />
            ))}
        </div>
      </DropDown>
    </div>
  );
});

export default Autocomplete;
