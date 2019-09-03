import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { TextField } from '../ui';

const onChangeAction = action('changed');

storiesOf('TextField', module)
  .add('common', () => (
    <Container>
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(value) => {
            onChange(value);
            onChangeAction(value);
          }}
        />
      )}
    </Container>
  ))
  .add('inline', () => (
    <Container>
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(value) => {
            onChange(value);
            onChangeAction(value);
          }}
          inline
        />
      )}
    </Container>
  ))
  .add('search', () => (
    <Container>
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(value) => {
            onChange(value);
            onChangeAction(value);
          }}
          search
        />
      )}
    </Container>
  ))
  .add('error', () => (
    <Container>
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(value) => {
            onChange(value);
            onChangeAction(value);
          }}
          error
        />
      )}
    </Container>
  ))
  .add('multiline', () => (
    <Container>
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(value) => {
            onChange(value);
            onChangeAction(value);
          }}
          multiline
        />
      )}
    </Container>
  ))
  .add('no resize', () => (
    <Container>
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(value) => {
            onChange(value);
            onChangeAction(value);
          }}
          multiline
          resize={false}
        />
      )}
    </Container>
  ))