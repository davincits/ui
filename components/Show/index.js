import React from 'react';
import { isString } from '../utils';

export default function Show({ children, ...props }) {
  if (!props.if || !children) return null;
  if (isString(children)) return (<span>{children}</span>);
  if (Array.isArray(children)) return <div>{children}</div>;
  return children;
}
