import React from 'react';

import styled, { theme } from 'theme';

import { IIconColor } from './types';

const CheckedRadio: React.FC<IIconColor> = ({ el, ...props }) => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" {...props}>
    <g fill="none">
      <circle cx="8.5" cy="8.5" r="8" stroke={theme.colors.normalAccent} />
      <circle
        cx="8.5"
        cy="8.5"
        r="4"
        fill={theme.colors.normalAccent}
        stroke={theme.colors.normalAccent}
      />
    </g>
  </svg>
);

export const CheckedRadioIcon = styled(CheckedRadio)`
  ${({ css }) => css}
`;

const UncheckedRadio: React.FC<IIconColor> = ({ el, ...props }) => (
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" {...props}>
    <circle cx="8.5" cy="8.5" r="8" stroke={theme.colors.black} strokeOpacity="0.4" />
  </svg>
);

export const UncheckedRadioIcon = styled(UncheckedRadio)`
  ${({ css }) => css}
`;
