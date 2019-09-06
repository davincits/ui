import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { Gallery } from '../components';

storiesOf('Gallery', module)
  .add('common', () => (
    <Container>
      {() => (
        <Gallery
          images={[
            'http://lorempixel.com/1024/768/nature/1/',
            'http://lorempixel.com/1024/768/nature/2/',
            'http://lorempixel.com/1024/768/nature/3/',
            'http://lorempixel.com/1024/768/nature/4/',
            'http://lorempixel.com/1024/768/nature/5/',
            'http://lorempixel.com/1024/768/nature/6/',
            'http://lorempixel.com/1024/768/nature/7/',
            'http://lorempixel.com/1024/768/nature/8/',
            'http://lorempixel.com/1024/768/nature/9/',
          ]}
        />
      )}
    </Container>
  ))
