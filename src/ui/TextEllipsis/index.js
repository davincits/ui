import './style.scss';

import React from 'react';

export default function TextEllipsis({ children, ...props }) {
  return <div className="ui-ellipsis" {...props}>{children}</div>;
}
