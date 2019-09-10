import './style.scss';

import Item from './Item';
import Store, { UPDATE, REMOVE } from '../share/Store';
import Dispatcher from '../share/Dispatcher';
import getContainer from '../share/getContainer';
import { uniqid } from '../utils';

const TOASTR_DEFAULT = 'default';
const TOASTR_INFO = 'info';
const TOASTR_SUCCESS = 'success';
const TOASTR_WARNING = 'warning';
const TOASTR_DANGER = 'danger';
const DELLAY = 5000;
const HIDE_ANIMATION_DURATION = 250;

const store = new Store();
const dispatcher = new Dispatcher();

dispatcher.register(store.handle);

export function Toast(params) { add(params, TOASTR_DEFAULT); }
export function ToastInfo(params) { add(params, TOASTR_INFO); }
export function ToastSuccess(params) { add(params, TOASTR_SUCCESS); }
export function ToastWarning(params) { add(params, TOASTR_WARNING); }
export function ToastDanger(params) { add(params, TOASTR_DANGER); }

export default getContainer({ item: Item, store, className: 'ui-toaster-container' });

function update(payload) {
  dispatcher.dispatch({ type: UPDATE, payload });
}

function remove(payload) {
  dispatcher.dispatch({ type: REMOVE, payload });
}

function close(uid) {
  update({ uid, hide: true });
  setTimeout(() => remove(uid), HIDE_ANIMATION_DURATION);
}

function add(payload, type) {
  const { delay = DELLAY } = payload;
  const { closeElement } = payload;
  const uid = uniqid();
  const onClose = () => close(uid);
  dispatcher.dispatch({
    type,
    payload: {
      uid,
      delay,
      onClose,
      ...payload,
    },
  });
  if (!delay || closeElement) return;
  setTimeout(() => onClose(), delay);
}
