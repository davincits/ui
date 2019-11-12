import './style.scss';

import React, { Component } from 'react';
import DropDown from '../DropDown';
import List from '../List';
import TextField from '../TextField';
import Loading from '../LoadingDotted';
import { classes } from '../utils';

class MultiSelect extends Component {
  state = {
    serchString: '',
  };

  onSelect = (val) => {
    const { value, onChange } = this.props;
    if (!onChange) return;
    if (!value) return onChange([val]);
    onChange(value.includes(val) ? value.filter((item) => item !== val) : [...value, val]);
  }

  getButtonContent() {
    const { value, options } = this.props;
    if (!value || !value.length) return 'Choose...';
    if (value.length === 1) {
      return options.find((i) => i.value === value[0].value).label;
    }
    return `Selected: ${value.length}`;
  }

  onSearchChange = (serchString) => {
    this.setState({ serchString });
  }

  render() {
    const {
      className,
      label,
      options,
      value,
      buttonContent = this.getButtonContent(),
      inline,
      imageSize,
      search,
      notFoundText = 'Nothing was found...',
    } = this.props;
    const { serchString } = this.state;
    const searchStringLowercased = serchString.toLocaleLowerCase();
    const items = Array.isArray(options) ?
      options.filter(i => !serchString || (i.label || i).toLocaleLowerCase().includes(serchString)) :
      [];
    return (
      <div className={classes(['ui-multiselect', className])}>
        <DropDown
          label={label}
          buttonContent={buttonContent}
          inline={inline}
          name="ui-multiselect"
        >
          {search && (
            <div className="ui-multiselect-search">
              <TextField
                value={serchString}
                onChange={this.onSearchChange}
                search
              />
            </div>
          )}
          {items
            ? (items.length ? (
              <List
                items={items}
                onClick={this.onSelect}
                imageSize={imageSize}
                isChecked={(i) => Boolean(value && value.includes(i))}
                checkbox
              />
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
        </DropDown>
      </div>
    );
  }
}

export default MultiSelect;
