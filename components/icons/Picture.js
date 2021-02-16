import React from 'react';
import Svg from './Svg';

export default props => (
  <Svg viewBox="0 0 32 32" iconName="picture" {...props}>
    <g stroke="currentColor" strokeWidth="2" fill="none">
      <polyline points="8 23 13.9 17 19 22.1" />
      <polyline points="17 20 22 15 26 19" />
      <circle cx="9.5" cy="12.5" r="2.5" />
      <rect x="2" y="5" width="28" height="22" rx="2" />
    </g>
  </Svg>
);
