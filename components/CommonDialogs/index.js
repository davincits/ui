import "./style.scss";

import Item, { DIALOG_ALERT, DIALOG_CONFIRM, DIALOG_CUSTOM } from "./Item";
import Store, { REMOVE } from "../share/Store";
import Dispatcher from "../share/Dispatcher";
import getContainer from "../share/getContainer";
import { uniqid } from "../utils";

const store = new Store();
const dispatcher = new Dispatcher();

dispatcher.register(store.handle);

const remove = (payload, callback) => {
  dispatcher.dispatch({ type: REMOVE, payload });
  callback();
};

const add = (payload, type) => {
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
};

export const showAlertDialog = (params) => {
  return add(params, DIALOG_ALERT);
};

export const showConfirmDialog = (params) => {
  return add(params, DIALOG_CONFIRM);
};

export const showCustomDialog = (params) => {
  return add(params, DIALOG_CUSTOM);
};

export default getContainer({ item: Item, store, className: "ui-common-dialogs-container" });

