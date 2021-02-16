import React from 'react';
import Svg from './Svg';

export default props => (
  <Svg viewBox="0 0 16 16" iconName="attention" {...props}>
    <path transform="translate(-.5, -.5)" d="M8.5,1 C8.23,1 7.98,1.1 7.78,1.29 L1.29,7.78 C0.9,8.17 0.9,8.82 1.29,9.21 L7.78,15.7 C8.17,16.09 8.82,16.09 9.21,15.7 L15.7,9.21 C16.09,8.82 16.09,8.17 15.7,7.78 L9.21,1.29 C9.02,1.1 8.76,1 8.5,1 Z M8.5,2 L14.99,8.49 C15,8.5 15,8.5 14.99,8.51 L8.5,14.99 C8.5,15 8.49,15 8.48,14.99 L2,8.51 C1.99,8.5 1.99,8.5 2,8.49 L8.48,2 C8.5,1.99 8.5,1.99 8.5,2 Z M8,5 L8,10 L9,10 L9,5 L8,5 Z M8,11 L8,12 L9,12 L9,11 L8,11 Z" />
  </Svg>
);
