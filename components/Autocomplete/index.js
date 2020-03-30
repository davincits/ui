import "./style.scss";

import React, { Component } from "react";
import DropDown from "../DropDown";
import TextField from "../TextField";
import Loading from "../LoadingDotted";
import List from "../List";
import { classes } from "../utils";

class Autocomplete extends Component {
  onSelect = (value) => {
    const { onChange, onSelect } = this.props;
    const { dropdown } = this.refs;
    onChange(value);
    if (onSelect) onSelect(value);
    dropdown.setState({ opened: false });
  }

  onFocus = () => {
    const { dropdown } = this.refs;
    dropdown.setState({ opened: true });
    dropdown.checkPosition();
  }

  handleChange = (value, event) => {
    const { dropdown } = this.refs;
    const { onChange } = this.props;
    if (!dropdown.state.opened) {
      dropdown.setState({ opened: true });
      dropdown.checkPosition();
    }
    if (onChange) onChange(value, event);
  }

  render() {
    const {
      className,
      notFoundText = "Nothing was found...",
      items,
      label,
      value = "",
      onChange,
      loading,
      disabled,
      placeholder,
    } = this.props;
    return (
      <div className={classes(["ui-component ui-autocomplete", className])}>
        <DropDown
          button={(
            <TextField
              label={label}
              value={value}
              onChange={this.handleChange}
              onFocus={this.onFocus}
              disabled={disabled}
              placeholder={placeholder}
              search />
          )}
          disabled={disabled}
          ref="dropdown"
          name="ui-autocomplete"
          manual>
          <div className="ui-autocomplete-items">
            {items
              ? (items.length ? (
                <List items={items} onClick={this.onSelect} />
              ) : (
                <List
                  items={[notFoundText]}
                  notActive />
              )) : (loading && (
                <List
                  items={[<Loading />]}
                  notActive />
              )
              )}
          </div>
        </DropDown>
      </div>
    );
  }
}

export default Autocomplete;
