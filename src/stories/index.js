import './style.scss';

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {
  Button,
  TextField,
} from '../ui';

storiesOf('Button', module)
  .add('common', () => (
    <div className="content">
      <Button onClick={action('clicked')}>Hello Button</Button>
    </div>
  ))
  .add('uppercase', () => (
    <div className="content">
      <Button onClick={action('clicked')} uppercase>Hello Button</Button>
    </div>
  ))
  .add('block', () => (
    <div className="content">
      <Button onClick={action('clicked')} block>Hello Button</Button>
    </div>
  ))
  .add('loading', () => (
    <div className="content">
      <Button onClick={action('clicked')} loading>Hello Button</Button>
    </div>
  ))
  .add('unbordered', () => (
    <div className="content">
      <Button onClick={action('clicked')} unbordered>Hello Button</Button>
    </div>
  ))
  .add('small', () => (
    <div className="content">
      <Button onClick={action('clicked')} small>Hello Button</Button>
    </div>
  ))
  .add('primary', () => (
    <div className="content">
      <Button onClick={action('clicked')} primary>Hello Button</Button>
    </div>
  ))
  .add('danger', () => (
    <div className="content">
      <Button onClick={action('clicked')} danger>Hello Button</Button>
    </div>
  ))
  .add('blue', () => (
    <div className="content">
      <Button onClick={action('clicked')} blue>Hello Button</Button>
    </div>
  ))
  .add('disabled', () => (
    <div className="content">
      <Button onClick={action('clicked')} disabled>Hello Button</Button>
    </div>
  ));

storiesOf('TextField', module)
  .add('common', () => (
    <div className="content">
      <TextField label="Input label" value="Value" onChange={action('changed')} />
    </div>
  ))
  .add('multiline', () => (
    <div className="content">
      <TextField label="Input label" value="Value" onChange={action('changed')} multiline/>
    </div>
  ))
  .add('multiline', () => (
    <div className="content">
      <TextField label="Input label" value="Value" onChange={action('changed')} multiline/>
    </div>
  ))

storiesOf('Dummy', module)
  .add('dummy', () => (
    <div className="content"></div>
  ))
