import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { CheckBox } from '../components';

storiesOf('CheckBox', module)
  .add('common', () => (
    <Container>
      {({ value: [v1, v2, v3, v4] = [false, true, false, true], onChange }) => (
        <div>
          <CheckBox
            label="Input label #1"
            value={v1}
            onChange={(v) => onChange([v, v2, v3, v4])}
          />
          <CheckBox
            label="Input label #2"
            value={v2}
            onChange={(v) => onChange([v1, v, v3, v4])}
          />
          <CheckBox
            label="Input label #3"
            value={v3}
            onChange={(v) => onChange([v1, v2, v, v4])}
            disabled
          />
          <CheckBox
            label="Input label #3"
            value={v4}
            onChange={(v) => onChange([v1, v2, v3, v])}
            disabled
          />
        </div>
      )}
    </Container>
  ));
