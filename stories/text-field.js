import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { TextField } from '../components';
import IconVerified from '../components/icons/Verified';

storiesOf('TextField', module)
  .add('common', () => (
    <Container width="240px">
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(value) => {
            onChange(value);
            action('changed')(value);
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
          onChange={(value) => {
            onChange(value);
            action('changed')(value);
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
          onChange={(value) => {
            onChange(value);
            action('changed')(value);
          }}
          search
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
          onChange={(value) => {
            onChange(value);
            action('changed')(value);
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
          onChange={(value) => {
            onChange(value);
            action('changed')(value);
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
          onChange={(value) => {
            onChange(value);
            action('changed')(value);
          }}
          multiline
          autoheight={false}
        />
      )}
    </Container>
  ))
  .add('prefix', () => (
    <Container width="240px">
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(value) => {
            onChange(value);
            action('changed')(value);
          }}
          prefix="Pre"
        />
      )}
    </Container>
  ))
  .add('postfix', () => (
    <Container width="240px">
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(value) => {
            onChange(value);
            action('changed')(value);
          }}
          postfix="Post"
        />
      )}
    </Container>
  ))
  .add('prefix & postfix', () => (
    <Container width="240px">
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={(value) => {
            onChange(value);
            action('changed')(value);
          }}
          prefix="Pre"
          postfix={<IconVerified style={{ color: '#00adff' }}/>}
        />
      )}
    </Container>
  ))