export const parent = ({ parentElement }, query) => {
  if (!parentElement || !query || parentElement.matches(query)) return parentElement;
  return parent(parentElement, query);
};

export const classes = obj => Object.keys(obj).filter(key => obj[key]).join(' ');

export const isNull = value => value === null;
