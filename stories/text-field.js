import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { TextField } from '../components';

storiesOf('TextField', module)
  .add('common', () => (
    <Container width="240px">
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(val) => {
            onChange(val);
            action('changed')(val);
          }}
        />
      )}
    </Container>
  ))
  .add('inline', () => (
    <Container width="240px">
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(val) => {
            onChange(val);
            action('changed')(val);
          }}
          inline
        />
      )}
    </Container>
  ))
  .add('search', () => (
    <Container width="240px">
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(val) => {
            onChange(val);
            action('changed')(val);
          }}
          search
        />
      )}
    </Container>
  ))
  .add('number', () => (
    <Container width="240px">
      {({ value = '5', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(val) => {
            onChange(val);
            action('changed')(val);
          }}
          type="number"
        />
      )}
    </Container>
  ))
  .add('natural number', () => (
    <Container width="240px">
      {({ value = '5', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(val) => {
            onChange(val);
            action('changed')(val);
          }}
          type="number"
          natural
        />
      )}
    </Container>
  ))
  .add('error', () => (
    <Container width="240px">
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(val) => {
            onChange(val);
            action('changed')(val);
          }}
          error
        />
      )}
    </Container>
  ))
  .add('multiline', () => (
    <Container width="240px">
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(val) => {
            onChange(val);
            action('changed')(val);
          }}
          multiline
        />
      )}
    </Container>
  ))
  .add('no autoheight', () => (
    <Container width="240px">
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(val) => {
            onChange(val);
            action('changed')(val);
          }}
          multiline
          autoheight={false}
        />
      )}
    </Container>
  ));
