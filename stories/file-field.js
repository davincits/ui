import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { FileField } from '../src';

storiesOf('FileField', module)
  .add('common', () => (
    <Container>
      {() => (
        <FileField onChange={action('changed')}>
          Click to select a file
        </FileField>
      )}
    </Container>
  ))
  .add('multiple', () => (
    <Container>
      {({ value: error, onChange }) => (
        <FileField
          onChange={(value) => {
            onChange(false);
            action('changed')(value)
          }}
          onError={(value) => {
            onChange(true);
            action('error')(value)
          }}
          error={error}
          maxSize={1024}
          fileTypes=".txt"
          multiple
        >
          Click to select one or more file
        </FileField>
      )}
    </Container>
  ))
