export const UPDATE = "UPDATE";
export const REMOVE = "REMOVE";

class Store {
  constructor() {
    this.items = [];
    this.events = {};
  }

  handle = ({ type, payload }) => {
    const { items } = this;
    switch (type) {
      case UPDATE:
        this.items = this.items.map((item) => (item.uid === payload.uid ? { ...item, ...payload } : item));
        this.emit("change");
        break;
      case REMOVE:
        this.items = this.items.filter((item) => item.uid !== payload);
        this.emit("change");
        break;
      default:
        this.items = [...items, { type, ...payload }];
        this.emit("change");
        break;
    }
  };

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
      this.events[event].forEach((cb) => cb(...rest));
    }
  }
}

export default Store;
