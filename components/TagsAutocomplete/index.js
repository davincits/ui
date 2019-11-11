import './style.scss';

import React, { PureComponent } from 'react';
import TagsField from '../TagsField';
import DropDown from '../DropDown';
import Loading from '../LoadingDotted';
import List from '../List';
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
    dropdown.clickHandler();
  }

  onFocus = () => {
    const { dropdown } = this.refs;
    dropdown.clickHandler();
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
      placeholder,
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
              error={error}
              disabled={disabled}
              placeholder={placeholder}
              noCustom
            />
          }
          label={label}
          ref="dropdown"
          inline={false}
          name="ui-tags-autocomplete"
        >
          <div className="ui-tags-autocomplete-items">
            {items ?
              (items.length ? (
                <List items={items.filter(item => !Array.isArray(value) || !value.includes(item))} onClick={this.onSelect} />
              ) : (
                <div className="ui-tags-autocomplete-item ui-tags-autocomplete-item-not-found">
                  {notFoundText}
                </div>
              )) : (
                loading && (
                  <div className="ui-tags-autocomplete-item ui-tags-autocomplete-item-loading">
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
