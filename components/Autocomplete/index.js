import './style.scss';

import React, { Component } from 'react';
import DropDown from '../DropDown';
import TextField from '../TextField';
import Item from './Item';
import { classes } from '../utils';

class Autocomplete extends Component {
  state = {
    notFound: false,
    items: null,
  }

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
      minChars = 2,
    } = this.props;
    const textField = (
      <TextField
        value={value}
        onChange={onChange}
        onFocus={this.onFocus}
        search
      />
    );
    const lowerValue = value.toLowerCase() ;
    const list = value.length >= minChars ?
      items.filter(i => i.toLowerCase().includes(lowerValue)) : null;
    return (
      <div className={classes(['ui-autocomplete', className])}>
        <DropDown
          label={label}
          button={textField}
          ref="dropdown"
          manual
        >
          <div className="ui-autocomplete-items">
            {list && (list.length ? (
              list.map(value => (
                <Item key={value} value={value} onClick={this.onSelect}/>
              ))
            ) : (
              <div className="ui-autocomplete-item ui-autocomplete-item-not-found">
                {notFoundText}
              </div>
            ))}
          </div>
        </DropDown>
      </div>
    );
  }
}

export default Autocomplete;