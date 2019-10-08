import './style.scss';

import React, { Component } from 'react';
import DropDown from '../DropDown';
import TextField from '../TextField';
import Loading from '../LoadingDotted';
import Item from './Item';
import { classes, isString } from '../utils';

const defaultFilter = (item, value, lowerValue) => item.toLowerCase().includes(lowerValue);

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
      minLength = 1,
      loading,
      filter = defaultFilter,
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
    const lowerValue = isString(value) ? value.toLowerCase() : '';
    const list = (items && lowerValue.length >= minLength) ?
      items.filter(i => !filter || filter(i, value, lowerValue)) : null;
    return (
      <div className={classes(['ui-autocomplete', className])}>
        <DropDown
          button={textField}
          ref="dropdown"
          manual
        >
          <div className="ui-autocomplete-items">
            {list ?
              (list.length ? (
                list.map(value => (
                  <Item key={value} value={value} onClick={this.onSelect} />
                ))
              ) : (
                <div className="ui-autocomplete-item ui-autocomplete-item-not-found">
                  {notFoundText}
                </div>
              )) : (
                loading && (
                  <div className="ui-autocomplete-item ui-autocomplete-item-loading">
                    <Loading />
                  </div>
                )
              )
            }
          </div>
        </DropDown>
      </div>
    );
  }
}

export default Autocomplete;
