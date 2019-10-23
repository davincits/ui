import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { Autocomplete } from '../components';
import CITIES from './mocks/cities.json';
import USERS from './mocks/users.json';

const debounce = (func, wait, immediate) => (...args) => {
  let timeout = null;
  const later = () => {
    timeout = null;
    if (!immediate) func(...args);
  };
  const callNow = immediate && !timeout;
  clearTimeout(timeout);
  timeout = setTimeout(later, wait);
  if (callNow) func(...args);
};

class Example extends Component {
  state = {
    value: null,
    items: null,
  }

  request = debounce((value) => {
    action('request()')(value);
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({
        items: USERS.map(({ first_name, last_name }) => `${first_name} ${last_name}`),
        loading: false,
      });
    }, 1000);
  }, 400)

  onChange = (value) => {
    this.setState({ value, items: null });
    if (value) this.request(value);
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
      {({ value, onChange }) => (
        <div style={{ width: '286px' }}>
          <Autocomplete
            label="Autocomplete"
            value={value}
            items={CITIES}
            onChange={onChange}
          />
        </div>
      )}
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
  ));
