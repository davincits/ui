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

  onSelect = (value) => {
    // const { onChange } = this.props;
    // const { dropdown } = this.refs;
    // onChange(value);
    // dropdown.setState({ opened: false });
  }

  onFocus = () => {
    const { dropdown } = this.refs;
    dropdown.setState({ opened: true });
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
      onInputChange,
      minLength = 1,
      ...rest
    } = this.props;
    const { inputValue, loading } = this.state;
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
              onInputChange={onInputChange}
            />
          }
          ref="dropdown"
          manual
        >
          <div className="ui-tags-autocomplete-items">
            {items ?
              (items.length ? (
                items.map(value => (
                  <Item key={value} value={value} onClick={this.onSelect} />
                ))
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
