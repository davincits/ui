import React from 'react';
import 'app/styles/loading.scss';

import './styles.scss';

function LoadingDotted({ width, height }) {
  const style = {
    width: width ? `${width}px` : '',
    height: height ? `${height}px` : '',
  };
  return (
    <div className="loading-css-dotted" style={style}>
      <span className="dot dot-first" />
      <span className="dot dot-second" />
      <span className="dot dot-third" />
    </div>
  );
}

export default LoadingDotted;
