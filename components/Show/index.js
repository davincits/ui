import React from 'react';
import { isString } from 'app/utils/common';

export default function Show({ children, ...props }) {
  if (!props.if) return null;
  if (isString) return (<span>{children}</span>);
  if (Array.isArray(children)) return (<div>{children}</div>);
  return children;
}
