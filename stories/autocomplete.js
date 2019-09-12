import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { Autocomplete } from '../components';
import CITIES from './mocks/cities.json';

storiesOf('Autocomplete', module)
  .add('common', () => (
    <Container>
      {({ value, onChange }) => (
        <div style={{ width: '286px' }}>
          <Autocomplete
            label="Autocomplete"
            value={value}
            items={CITIES}
            onChange={(value) => {
              onChange(value);
              action('changed')(value);
            }}
          />
        </div>
      )}
    </Container>
  ))