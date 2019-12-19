import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { FileField } from '../components';

storiesOf('FileField', module)
  .add('common', () => (
    <Container>
      {() => (
        <FileField onChange={() => console.log('changed')}>
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
          }}
          onError={(value) => {
            onChange(true);
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
  ));
