export const parent = ({ parentElement }, query) => {
  if (!parentElement || !query || parentElement.matches(query)) return parentElement;
  return parent(parentElement, query);
};

export const classes = (arg) => (Array.isArray(arg) ? arg : Object.entries(arg).map(([key, val]) => val && key)).filter((key) => key).join(" ");

export const classNames = classes;

export const isNull = (value) => value === null;

export const isString = (value) => typeof value === "string";

export const isFunction = (value) => typeof value === "function";

const MAX_TO_STRING_BASE = 36;
export const uniqid = () => `uid${Date.now().toString(MAX_TO_STRING_BASE)}${Math.random().toString(MAX_TO_STRING_BASE)}`;
