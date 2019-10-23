export const parent = ({ parentElement }, query) => {
  if (!parentElement || !query || parentElement.matches(query)) return parentElement;
  return parent(parentElement, query);
};

export const classes = (o) => (Array.isArray(o) ? o : Object.entries(o).map(([k, v]) => v && k)).filter((k) => k).join(' ');

export const isNull = (value) => value === null;

export const isString = (value) => typeof value === 'string';

export const uniqid = () => `uid${Date.now().toString(36)}${Math.random().toString(36)}`;
