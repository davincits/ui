import Dispatcher from './Dispatcher';
import { UPDATE, REMOVE } from './constants';

class ToastrStore {
  constructor() {
    this.toasts = [];
    this.events = {};
  }

  on(event, cb) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(cb);
    return () => {
      if (this.events[event]) {
        this.events[event].splice(this.events[event].indexOf(cb), 1);
      }
    };
  }

  emit(event, ...rest) {
    if (this.events[event]) {
      this.events[event].forEach(cb => cb(...rest));
    }
  }

  handle({ type, payload }) {
    const { toasts } = this;
    switch (type) {
      case UPDATE:
        this.toasts = this.toasts.map(toast => (toast.uid === payload.uid ? { ...toast, ...payload } : toast));
        this.emit('change');
        break;
      case REMOVE:
        this.toasts = this.toasts.filter(toast => toast.uid !== payload);
        this.emit('change');
        break;
      default:
        this.toasts = [...toasts, { type, ...payload }];
        this.emit('change');
        break;
    }
  }
}

const storeInstance = new ToastrStore();
Dispatcher.register(storeInstance.handle.bind(storeInstance));

export default storeInstance;
