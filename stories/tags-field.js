import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from './Container';
import { TagsField } from '../components';

storiesOf('TagsField', module)
  .add('common', () => (
    <Container width="480px">
      {({ value, onChange }) => (
        <TagsField
          label="Tags"
          value={value}
          onChange={onChange}
        />
      )}
    </Container>
  ))
  .add('predefined', () => (
    <Container width="480px">
      {({ value = ['Brno', 'Ostrave', 'Plzen', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum odio consequuntur id alias magni recusandae molestias rem assumenda laboriosam ad, eos inventore quasi repellat quibusdam possimus error suscipit, perferendis ipsam'], onChange }) => (
        <TagsField
          label="Tags"
          value={value}
          onChange={onChange}
        />
      )}
    </Container>
  ))
  .add('disabled', () => (
    <Container width="480px">
      {({ value = ['Brno', 'Ostrave', 'Plzen'], onChange }) => (
        <TagsField
          label="Tags"
          value={value}
          onChange={onChange}
          disabled
        />
      )}
    </Container>
  ));
