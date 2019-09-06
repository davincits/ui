import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import { DropArea } from '../components';

const onChangeAction = action('changed');

storiesOf('DropArea', module)
  .add('common', () => (
    <Container>
      {({ onChange }) => (
        <div style={{ padding: '16px', display: 'flex' }}>
          <DropArea
            onChange={(value) => {
              onChange(value);
              onChangeAction(value);
            }}
          >
            <div style={{ padding: '50px' }}>Drag file to this area</div>
          </DropArea>
        </div>
      )}
    </Container>
  ))
