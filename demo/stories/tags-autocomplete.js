import React, { Component } from "react";
import { storiesOf } from "../utils";
import Container from "./Container";
import { TagsAutocomplete } from "../../components";
import USERS from "./mocks/users.json";

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
    const search = (value || "").trim().toLocaleLowerCase();
    const items = USERS
      .map(({ first_name, last_name }) => `${first_name} ${last_name}`)
      .filter((str) => str.toLocaleLowerCase().includes(search));
    setTimeout(() => {
      this.setState({
        items,
        loading: false,
      });
    }, 1000);
  }, 400)

  onChange = (value, event) => {
    this.setState({ value, items: null });
  }

  onInputChange = (value) => {
    this.setState({ items: null });
    if (value) this.request(value);
  }

  render() {
    const { disabled } = this.props;
    const {
      value, items, loading,
    } = this.state;
    return (
      <TagsAutocomplete
        label="Tags autocomplete"
        value={value}
        items={items}
        loading={loading}
        onChange={this.onChange}
        onInputChange={this.onInputChange}
        disabled={disabled}
      />
    );
  }
}

storiesOf("TagsAutocomplete", module)
  .add("common", () => (
    <Container width="480px">
      {() => (
        <Example />
      )}
    </Container>
  ))
  .add("disabled", () => (
    <Container width="480px">
      {() => (
        <Example disabled />
      )}
    </Container>
  ));
