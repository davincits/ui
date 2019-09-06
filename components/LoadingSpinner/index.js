import './style.scss';

import React from 'react';

function LoadingSpinner({ global }) {
  return (<div className={`loading-css-only${global ? ' global' : ''}`} />);
}

export default LoadingSpinner;
