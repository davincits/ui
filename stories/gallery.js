import React from 'react';

import { storiesOf } from '@storybook/react';
import Container from './Container';
import { Gallery } from '../src';

const IMAGES = [
  'https://davinci-media.s3-eu-central-1.amazonaws.com/media/1486567361619.jpeg',
  'https://davinci-media.s3-eu-central-1.amazonaws.com/media/1486567361613.jpg',
  'https://davinci-media.s3-eu-central-1.amazonaws.com/media/1486567361618.jpeg',
  'https://davinci-media.s3-eu-central-1.amazonaws.com/media/1486567361617.jpg',
  'https://davinci-media.s3-eu-central-1.amazonaws.com/media/1486567361634.jpeg',
  'https://davinci-media.s3-eu-central-1.amazonaws.com/media/1486567361627.jpeg',
  'https://davinci-media.s3-eu-central-1.amazonaws.com/media/1486567361746.jpg',
  'https://stage-davinci-media.s3.eu-central-1.amazonaws.com/hotels/photos/W0GCmB5E87aV.jpg',
];

storiesOf('Gallery', module)
  .add('common', () => (
    <Container>
      {() => (
        <Gallery images={IMAGES} />
      )}
    </Container>
  ))
