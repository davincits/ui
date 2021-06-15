import React from "react";
import Svg from "./Svg";

export default ({ delay, ...props }) => {
  const styles = `
    #animation {
      stroke-dasharray: 76;
      stroke-dashoffset: 76;
      animation: dash ${String(delay || 0)}ms linear forwards;
    }
    @keyframes dash { to { stroke-dashoffset: 0; } }
  `;
  return (
    <Svg viewBox="0 0 24 24" iconName="close-animated" {...props}>
      <style>{styles}</style>
      {!!delay && (
        <g strokeWidth="1" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="11.5" opacity="0.1" />
          <circle cx="12" cy="12" r="11.5" opacity="0.2" id="animation" transform="rotate(-90 12 12)" />
        </g>
      )}
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </Svg>
  );
};
