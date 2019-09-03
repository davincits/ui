import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { FileField } from '../ui';

const onChangeAction = action('changed');

storiesOf('FileField', module)
  .add('common', () => (
    <Container>
      {({ onChange }) => (
        <FileField
          onChange={(value) => {
            onChange(value);
            onChangeAction(value);
          }}
        >
          Click to select a file
        </FileField>
      )}
    </Container>
  ))
  .add('multiple', () => (
    <Container>
      {({ onChange }) => (
        <FileField
          onChange={(value) => {
            onChange(value);
            onChangeAction(value);
          }}
          multiple
        >
          Click to select one or more file
        </FileField>
      )}
    </Container>
  ))
