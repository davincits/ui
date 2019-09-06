import React from 'react';
import { classes } from '../utils';
import Dialog from '../Dialog';
import Button from '../Button';

export const DIALOG_ALERT = 'alert';
export const DIALOG_CONFIRM = 'confirm';

function Item({
  title = 'Confirm action', // i18n
  message = 'You\'re sure about that?', // i18n
  type,
  onCancel,
  onConfirm,
  textConfirm,
  textCancel = 'Cancel', // i18n
}) {
  const classList = classes({
    'ui-common-dialog-item': true,
    [`ui-common-dialog-item-type-${type}`]: type,
  });
  let actions = [];
  switch (type) {
    case DIALOG_ALERT:
      actions = (<Button primary uppercase onClick={onConfirm}>{textConfirm || 'OK'}</Button>); // i18n
      break;
    case DIALOG_CONFIRM:
      actions = [
        (<Button primary uppercase onClick={onConfirm}>{textConfirm || 'Confirm'}</Button>), // i18n
        (<Button danger uppercase onClick={onCancel}>{textCancel}</Button>),
      ];
      break;
    default:
  }
  return (
    <Dialog
      className={classList}
      title={title}
      actions={actions}
      onClose={onCancel}
    >
      {message}
    </Dialog>
  );
}

export default Item;
