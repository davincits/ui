import React from 'react';

export default function Show({ children, ...props }) {
  if (!props.if || !children) return null;
  if (Array.isArray(children)) return <div>{children}</div>;
  return children;
}
