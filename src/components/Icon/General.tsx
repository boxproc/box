import React from 'react';

import styled from 'theme';

import {
  IconColorProps,
  staticGrayStyle,
} from './sharedCss';

const Logout: React.FC<IconColorProps> = props => (
  <svg width="15" height="16" viewBox="0 0 15 16" fill="none" {...props}>
    <path d="M5.9 15H2.4C1.6268 15 1 14.3732 1 13.6V2.4C1 1.6268 1.6268 1 2.4 1H5.9" stroke="#0B132B" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.8 10.8L13.6 7.99995L10.8 5.19995" stroke="#0B132B" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.6 8H5.19995" stroke="#0B132B" strokeLinecap="round" strokeLinejoin="round" />
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
  ${staticGrayStyle}
  ${({ css }) => css}
`;
EyeIcon.defaultProps = {
  el: 'g',
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
  ${staticGrayStyle}
  ${({ css }) => css}
`;
EyeOffIcon.defaultProps = {
  el: 'g',
};
