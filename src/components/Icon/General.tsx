import React from 'react';

import styled, { theme } from 'theme';

import {
  DocumentIconProps,
  IconColorProps,
  staticAccentStyle,
} from './sharedCss';

const Logout: React.FC<IconColorProps> = props => (
  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" {...props}>
    <path
      d="M5.9 15H2.4C1.6268 15 1 14.3732 1 13.6V2.4C1 1.6268 1.6268 1 2.4 1H5.9"
      stroke="#0B132B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.8 10.8L13.6 7.99995L10.8 5.19995"
      stroke="#0B132B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.6 8H5.19995"
      stroke="#0B132B"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LogoutIcon = styled(Logout)`
  ${({ css }) => css}
`;

const Eye: React.FC<IconColorProps> = ({ el, ...props }) => (
  <svg width={15} height={14} viewBox="0 0 15 14" {...props}>
    <g
      fill="none"
      stroke="#0B132B"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M.5 7.09S3.045 2 7.5 2c4.454 0 7 5.09 7 5.09s-2.546 5.092-7 5.092c-4.455 0-7-5.091-7-5.091z" />
      <path d="M9.41 7.09a1.91 1.91 0 1 1-3.82 0 1.91 1.91 0 0 1 3.82 0z" />
    </g>
  </svg>
);

export const EyeIcon = styled(Eye)`
  ${staticAccentStyle}
  ${({ css }) => css}
`;
EyeIcon.defaultProps = {
  el: 'g',
  color: theme.grayColor,
};

const EyeOff: React.FC<IconColorProps> = ({ el, ...props }) => (
  <svg width={15} height={17} viewBox="0 0 25 25" {...props}>
    <g
      fill="none"
      stroke="#0B132B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M14.12 14.12C13.3721 14.9226 12.2458 15.253 11.1828 14.9816C10.1199 14.7101 9.28991 13.8801 9.01846 12.8172C8.747 11.7542 9.07739 10.6279 9.88 9.88003M17.94 17.94C16.2306 19.243 14.1491 19.9649 12 20C5 20 1 12 1 12C2.24389 9.68192 3.96914 7.65663 6.06 6.06003 M9.9 4.24003C10.5883 4.0789 11.2931 3.99836 12 4.00003C19 4.00003 23 12 23 12C22.393 13.1356 21.6691 14.2048 20.84 15.19" />
      <path d="M1 1L23 23" />
    </g>
  </svg>
);

export const EyeOffIcon = styled(EyeOff)`
  ${staticAccentStyle}
  ${({ css }) => css}
`;
EyeOffIcon.defaultProps = {
  el: 'g',
  color: theme.grayColor,
};

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
    width={9}
    height={6}
    viewBox="0 0 9 6"
    fill="none"
    {...props}
  >
    <path
      d="M1 1L4.5 5L8 1"
      stroke="#000000"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ChevronIcon = styled(Chevron)`
  ${({ css }) => css}
`;

const Delete: React.FC<DocumentIconProps> = ({ el, bigIcon, primary, ...props }) => (
  <svg width="14" height="18" viewBox="0 0 14 18" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.5 0L10.5 1H14V3H0V1H3.5L4.5 0H9.5ZM1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM3 6H11V16H3V6Z"
      fill="#999999"
    />
  </svg>
);

export const DeleteIcon = styled(Delete)`
  ${({ css }) => css}
`;
