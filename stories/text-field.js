import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from './Container';
import { TextField } from '../components';

storiesOf('TextField', module)
  .add('common', () => (
    <Container width="240px">
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
          number
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
          onChange={onChange}
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
          onChange={onChange}
          error
        />
      )}
    </Container>
  ))
  .add('error text', () => (
    <Container width="240px">
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          label="Input label"
          value={value}
          onChange={onChange}
          errorText="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
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
          onChange={onChange}
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
          onChange={onChange}
          multiline
          autoheight={false}
        />
      )}
    </Container>
  ))
  .add('disabled', () => (
    <Container width="240px">
      {({ value = 'Lorem ipsum', onChange }) => (
        <div>
          <TextField
            label="Input label"
            value={value}
            onChange={onChange}
            disabled
          />
          <div className="u-margin-top">
            <TextField
              label="Input label"
              value={value}
              onChange={onChange}
              multiline
              disabled
            />
          </div>
        </div>
      )}
    </Container>
  ))
  .add('floated label', () => (
    <Container width="240px">
      {({ value = 'Lorem ipsum', onChange }) => (
        <TextField
          floatedLabel="Input label"
          value={value}
          onChange={onChange}
        />
      )}
    </Container>
  ));
