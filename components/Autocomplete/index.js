import './style.scss';

import React, { Component } from 'react';
import DropDown from '../DropDown';
import TextField from '../TextField';
import Loading from '../LoadingDotted';
import List from '../List';
import { classes } from '../utils';

class Autocomplete extends Component {
  onSelect = (value) => {
    const { onChange } = this.props;
    const { dropdown } = this.refs;
    onChange(value);
    dropdown.setState({ opened: false });
  }

  onFocus = () => {
    const { dropdown } = this.refs;
    dropdown.setState({ opened: true });
  }

  render() {
    const {
      className,
      notFoundText = 'Nothing was found...',
      items,
      label,
      value = '',
      onChange,
      loading,
    } = this.props;
    const textField = (
      <TextField
        label={label}
        value={value}
        onChange={onChange}
        onFocus={this.onFocus}
        search
      />
    );
    return (
      <div className={classes(['ui-autocomplete', className])}>
        <DropDown
          button={textField}
          ref="dropdown"
          manual
        >
          <div className="ui-autocomplete-items">
            {items
              ? (items.length ? (
                <List items={items} onClick={this.onSelect} />
              ) : (
                <List
                  items={[notFoundText]}
                  notActive
                />
              )) : (loading && (
                <List
                  items={[<Loading />]}
                  notActive
                />
              )
            )}
          </div>
        </DropDown>
      </div>
    );
  }
}

export default Autocomplete;
