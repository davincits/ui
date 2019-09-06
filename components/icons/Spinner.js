import React from 'react';
import Svg from './Svg';

export default ({ duration = 2000, ...props }) => {
  const styles = `
    #svg-icon-spinner-animation {
      animation: rotate ${duration}ms linear infinite;
      transform-origin: 50% 50%;
    }
    @keyframes rotate {
      to {
        transform: rotate(360deg);
      }
    }
  `;
  return (
    <Svg iconName="spinner" {...props}>
      <style>{styles}</style>
      <defs>
        <linearGradient id="gradient1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(5, 185, 230, 0.5)" />
          <stop offset="100%" stopColor="rgba(5, 185, 230, 0)" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(5, 185, 230, 0.5)" />
          <stop offset="100%" stopColor="rgba(5, 185, 230, 1)" />
        </linearGradient>
      </defs>
      <g id="svg-icon-spinner-animation">
        <path d="M0.5,12 A1,1 0 0,0 23.5,12" fill="none" strokeWidth="1" stroke="url(#gradient1)" />
        <path d="M0.5,12 A1,1 0 0,1 23.5,12" fill="none" strokeWidth="1" stroke="url(#gradient2)" />
      </g>
    </Svg>
  );
};
