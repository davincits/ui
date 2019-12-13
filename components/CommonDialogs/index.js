import './style.scss';

import Item, { DIALOG_ALERT, DIALOG_CONFIRM } from './Item';
import Store, { REMOVE } from '../share/Store';
import Dispatcher from '../share/Dispatcher';
import getContainer from '../share/getContainer';
import { uniqid } from '../utils';

const store = new Store();
const dispatcher = new Dispatcher();

dispatcher.register(store.handle);

export function AlertDialog(params) {
  return add(params, DIALOG_ALERT);
}

export function ConfirmDialog(params) {
  return add(params, DIALOG_CONFIRM);
}

export default getContainer({ item: Item, store });

function remove(payload, callback) {
  dispatcher.dispatch({ type: REMOVE, payload });
  callback();
}

function add(payload, type) {
  const uid = uniqid();
  return new Promise((resolve) => {
    dispatcher.dispatch({
      type,
      payload: {
        uid,
        onConfirm: (value) => remove(uid, () => resolve({ value })),
        onCancel: () => remove(uid, () => resolve(false)),
        ...payload,
      },
    });
  });
}
