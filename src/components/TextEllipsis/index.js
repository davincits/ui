import './style.scss';
import React from 'react';

export default function TextEllipsis({ children }) {
  return <div className="ui-ellipsis">{children}</div>;
}
