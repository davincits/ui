import './style.scss';

import React, { PureComponent } from 'react';
import TagsField from '../TagsField';
import DropDown from '../DropDown';
import Loading from '../LoadingDotted';
import Item from '../Autocomplete/Item';
import { classes } from '../utils';

class TagsAutocomplete extends PureComponent {
  state = {
    inputValue: '',
  }

  onSelect = (selected) => {
    const { value, onChange } = this.props;
    const { dropdown } = this.refs;
    onChange(Array.isArray(value) ? [...value, selected] : [selected]);
    this.setState({ inputValue: '' });
    dropdown.setState({ opened: false });
  }

  onFocus = () => {
    const { dropdown } = this.refs;
    dropdown.setState({ opened: true });
  }

  onInputChange = (inputValue) => {
    const { onInputChange } = this.props;
    this.setState({ inputValue });
    if (onInputChange) onInputChange(inputValue);
  }

  render() {
    const {
      className,
      items,
      label,
      error,
      disabled,
      value,
      notFoundText = 'Nothing was found...',
      loading,
      onChange,
    } = this.props;
    const { inputValue } = this.state;
    const classList = classes({
      'ui-tags-autocomplete': true,
      'ui-disabled': disabled,
      [className]: className,
    });
    return (
      <div className={classList} onClick={this.onClick}>
        <DropDown
          button={
            <TagsField
              value={value}
              onFocus={this.onFocus}
              onInputChange={this.onInputChange}
              onChange={onChange}
              inputValue={inputValue}
              noCustom
            />
          }
          ref="dropdown"
          manual
        >
          <div className="ui-autocomplete-items">
            {items ?
              (items.length ? (
                items.filter(item => !Array.isArray(value) || !value.includes(item)).map(value => (
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

export default TagsAutocomplete;
