import React from 'react';
import Svg from './Svg';

export default ({ delay, ...props }) => {
  const styles = `
    #animation {
      stroke-dasharray: 76;
      stroke-dashoffset: 76;
      animation: dash ${String(delay)}ms linear forwards;
    }
    @keyframes dash {
      to {
        stroke-dashoffset: 0;
      }
    }
  `;
  return (
    <Svg viewBox="0 0 26 26" iconName="close-animated" {...props}>
      <style>{styles}</style>
      {
        !!delay && (
          <g strokeWidth="2" fill="none" stroke="currentColor">
            <circle cx="13" cy="13" r="12" opacity="0.1" />
            <circle cx="13" cy="13" r="12" opacity="0.2" id="animation" transform="rotate(-90 13 13)" />
          </g>
        )
      }
      <path transform="rotate(45 13 13)" d="M12,6 L14,6 L14,12 L20,12 L20,14 L14,14 L14,20 L12,20 L12,14 L6,14 L6,12 L12,12 L12,6 Z" />
    </Svg>
  );
};
