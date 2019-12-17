import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { MultiSelect } from '../components';
import LIST from './mocks/users_list.json';
import LIST_24 from './mocks/users_list_img_24.json';
import LIST_40 from './mocks/users_list_img_40.json';

storiesOf('MultiSelect', module)
  .add('common', () => (
    <Container>
      {({ value, onChange }) => (
        <div style={{ width: '240px' }}>
          <MultiSelect
            label="Input label"
            value={value}
            options={LIST}
            onChange={onChange}
            isSelected={(item, selected) => (
              Boolean(selected && selected.find((i) => i.id === item.id))
            )}
          />
        </div>
      )}
    </Container>
  ))
  .add('with image', () => (
    <Container>
      {({ value, onChange }) => (
        <div style={{ width: '240px' }}>
          <MultiSelect
            label="Input label"
            value={value}
            options={LIST_24}
            onChange={onChange}
          />
        </div>
      )}
    </Container>
  ))
  .add('with large image', () => (
    <Container>
      {({ value, onChange }) => (
        <div style={{ width: '260px' }}>
          <MultiSelect
            label="Input label"
            value={value}
            options={LIST_40}
            imageSize="large"
            onChange={onChange}
          />
        </div>
      )}
    </Container>
  ))
  .add('with search', () => (
    <Container>
      {({ value, onChange }) => (
        <div style={{ width: '280px' }}>
          <MultiSelect
            label="Input label"
            value={value}
            options={LIST_24}
            onChange={onChange}
            search
          />
        </div>
      )}
    </Container>
  ));
