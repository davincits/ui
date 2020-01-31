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

  onSelect = (item) => {
    const { value, onChange } = this.props;
    if (!onChange) return;
    if (!value) return onChange([item]);
    if ((value || []).find((current) => item.value === current.value)) {
      return onChange((value || []).filter((current) => item.value !== current.value));
    }
    onChange([...value, item]);
  }

  getButtonContent() {
    const {
      value,
      options,
      placeholder = 'Choose...',
      renderLabel,
    } = this.props;
    if (!value || !value.length) {
      return placeholder;
    }
    if (renderLabel) {
      return renderLabel(value);
    }
    if (value.length === 1) {
      return options.find(i => i.value === value[0].value).label;
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
      disabled,
    } = this.props;
    const { serchString } = this.state;
    const searchStringLowercased = serchString.toLocaleLowerCase();
    const items = Array.isArray(options)
      ? options
          .filter(item =>
            !serchString || item.label
            .toLocaleLowerCase()
            .includes(searchStringLowercased)
          )
      : [];
    return (
      <div className={classes(['ui-component ui-multiselect', className])}>
        <DropDown
          label={label}
          buttonContent={buttonContent}
          inline={inline}
          name="ui-multiselect"
          disabled={disabled}
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
                value={value}
                onClick={this.onSelect}
                imageSize={imageSize}
                isSelected={(current) => Boolean((value || []).find((item) => item.value === current.value))}
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
