import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import Container from './Container';
import { Autocomplete } from '../components';
import CITIES from './mocks/cities.json';
import USERS from './mocks/users.json';

const debounce = (func, wait, immediate) => {
  let timeout;
  return (...args) => {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

class Example extends Component {
  state = {
    value: null,
    items: null,
  }

  request = debounce((value) => {
    this.setState({ loading: true });
    const search = (value || '').toLocaleLowerCase();
    const items = USERS
      .map(({ first_name, last_name }) => `${first_name} ${last_name}`)
      .filter((user) => user.toLocaleLowerCase().includes(search));
    setTimeout(() => {
      this.setState({
        items,
        loading: false,
      });
    }, 1000);
  }, 400)

  onChange = (value, event) => {
    this.setState({ value, items: null });
    if (value && event) this.request(value);
  }

  render() {
    const { value, items, loading } = this.state;
    return (
      <Autocomplete
        label="Autocomplete"
        value={value}
        items={items}
        loading={loading}
        onChange={this.onChange}
      />
    );
  }
}

storiesOf('Autocomplete', module)
  .add('common', () => (
    <Container>
      {({ value, onChange }) => {
        const search = (value || '').toLocaleLowerCase();
        const items = search ? CITIES.filter((city) => city.toLocaleLowerCase().includes(search)) : [];
        return (
          <div style={{ width: '286px' }}>
            <Autocomplete
              label="Autocomplete"
              value={value}
              items={items}
              onChange={onChange}
            />
          </div>
        );
      }}
    </Container>
  ))
  .add('with request', () => (
    <Container>
      {() => (
        <div style={{ width: '286px' }}>
          <Example />
        </div>
      )}
    </Container>
  ))
  .add('disabled', () => (
    <Container>
      {({ value, onChange }) => {
        const search = (value || '').toLocaleLowerCase();
        const items = CITIES.filter((city) => city.toLocaleLowerCase().includes(search));
        return (
          <div style={{ width: '286px' }}>
            <Autocomplete
              label="Autocomplete"
              value={value}
              items={items}
              onChange={onChange}
              disabled
            />
          </div>
        );
      }}
    </Container>
  ));
