import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Container from './Container';
import {
  DialogsContainer, showAlertDialog, showConfirmDialog, Button,
} from '../components';

const openAlertDialog = async () => {
  await showAlertDialog({ title: 'Alert dialog title', message: 'Alert dialog message' });
  action('closed')();
};

const openConfirmDialog = async () => {
  if (await showConfirmDialog({ title: 'Confirm dialog title', message: 'Are you sure about that?' })) {
    action('closed')('I\'m pretty sure');
  } else {
    action('closed')('I\'m not sure');
  }
};

storiesOf('CommonDialogs', module)
  .addDecorator((story) => (
    <Container>
      {() => (
        <div>
          {story()}
          <DialogsContainer />
        </div>
      )}
    </Container>
  ))
  .add('alert', () => (
    <Container>
      {() => (<Button onClick={openAlertDialog}>Open alert dialog</Button>)}
    </Container>
  ))
  .add('confirm', () => (
    <Container>
      {() => (<Button onClick={openConfirmDialog}>Open confirm dialog</Button>)}
    </Container>
  ));
