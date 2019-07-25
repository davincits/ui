import Dispatcher from './Dispatcher';
import { UPDATE, REMOVE, DELLAY, HIDE_ANIMATION_DURATION } from './constants';

const uniqid = () => `uid${String(Date.now())}${String(Math.round(Math.random() * 1000000))}`;
const update = payload => Dispatcher.dispatch({ type: UPDATE, payload });
const remove = payload => Dispatcher.dispatch({ type: REMOVE, payload });
const close = (uid) => {
  update({ uid, hide: true });
  setTimeout(() => {
    remove(uid);
  }, HIDE_ANIMATION_DURATION);
};

const add = (payload, type) => {
  const { delay = DELLAY } = payload;
  const uid = uniqid();
  const onClose = () => close(uid);
  Dispatcher.dispatch({ type, payload: { uid, onClose, ...payload } });
  if (delay) {
    setTimeout(() => onClose(), delay);
  }
};

export { add };
