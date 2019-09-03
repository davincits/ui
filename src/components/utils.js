export const parent = ({ parentElement }, query) => {
  if (!parentElement || !query || parentElement.matches(query)) return parentElement;
  return parent(parentElement, query);
};

export const classes = o => (Array.isArray(o) ? o : Object.entries(o).map(([k, v]) => v && k)).filter(k => k).join(' ');

export const isNull = value => value === null;

export const uniqid = () => `uid${String(Date.now())}${String(Math.round(Math.random() * 1000000))}`;
