import React from 'react';

import styled from 'theme';
import ThemeProps from 'theme/theme';

export interface IconColorProps {
  className?: string;
  hover?: string;
  color?: string;
  theme?: ThemeProps;
  el?: string;
  css?: string;
  onClick?: (e?: React.MouseEvent<SVGElement>) => void;
}

const UncheckedBox: React.FC<IconColorProps> = ({ el, ...props }) => (
  <svg width={15} height={15} viewBox="0 0 15 15" {...props}>
    <path
      fill="none"
      stroke="#0B132B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.4}
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
      fill="#fffaf2"
      stroke="#ffa400"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.056.5h10.888c.86 0 1.556.696 1.556 1.556v10.888c0 .86-.696 1.556-1.556 1.556H2.056C1.196 14.5.5 13.804.5 12.944V2.056C.5 1.196 1.196.5 2.056.5z" />
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

const Chevron: React.FC<IconColorProps> = ({ ...props }) => (
  <svg
    width={8}
    height={5}
    viewBox="0 0 9 6"
    fill="none"
    {...props}
  >
    <path
      d="M1 1L4.5 5L8 1"
      stroke="#333333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronIcon = styled(Chevron)`
  ${({ css }) => css}
`;
