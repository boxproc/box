import React from 'react';

import styled from 'theme';

import { IconColorProps } from './types';

const CheckedRadio: React.FC<IconColorProps> = ({ el, ...props }) => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" {...props}>
    <g fill="#fffaf2">
      <circle cx="8.5" cy="8.5" r="8" stroke="#ffa400" />
      <circle cx="8.5" cy="8.5" r="4" fill="#ffa400" stroke="#ffa400" />
    </g>
  </svg>
);

export const CheckedRadioIcon = styled(CheckedRadio)`
  ${({ css }) => css}
`;

const UncheckedRadio: React.FC<IconColorProps> = ({ el, ...props }) => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" {...props}>
    <circle cx="8.5" cy="8.5" r="8" stroke="#0B132B" strokeOpacity="0.4" />
  </svg>
);

export const UncheckedRadioIcon = styled(UncheckedRadio)`
  ${({ css }) => css}
`;
