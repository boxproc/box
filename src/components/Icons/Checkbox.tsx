import React from 'react';

import styled, { theme } from 'theme';

import { IconColorProps } from './types';

const UncheckedBox: React.FC<IconColorProps> = ({ el, ...props }) => (
  <svg width={15} height={15} viewBox="0 0 15 15" {...props}>
    <path
      fill="none"
      stroke={theme.colors.black}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.4}
      // tslint:disable-next-line: max-line-length
      d="M2.056.5h10.888c.86 0 1.556.696 1.556 1.556v10.888c0 .86-.696 1.556-1.556 1.556H2.056C1.196 14.5.5 13.804.5 12.944V2.056C.5 1.196 1.196.5 2.056.5z"
    />
  </svg>
);

export const UncheckedBoxIcon = styled(UncheckedBox)`
  ${({ css }) => css}
`;

UncheckedBoxIcon.defaultProps = {
  el: 'g',
};

const CheckedBox: React.FC<IconColorProps> = ({ el, ...props }) => (
  <svg width={15} height={15} viewBox="0 0 15 15" {...props}>
    <g
      fill="none"
      stroke={theme.colors.normalAccent}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        // tslint:disable-next-line: max-line-length
        d="M2.056.5h10.888c.86 0 1.556.696 1.556 1.556v10.888c0 .86-.696 1.556-1.556 1.556H2.056C1.196 14.5.5 13.804.5 12.944V2.056C.5 1.196 1.196.5 2.056.5z"
      />
      <path d="M11.5 5.5l-5.5 5-2.5-2.273" />
    </g>
  </svg>
);

export const CheckedBoxIcon = styled(CheckedBox)`
  ${({ css }) => css}
`;

CheckedBoxIcon.defaultProps = {
  el: 'g',
};
