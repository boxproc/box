import styled from 'theme';

import { highlightCss } from 'components/highlightCss';

interface HrProps {
  accentColor?: boolean;
}

export const Hr = styled.div<HrProps>`
  margin-top: 15px;
  margin-bottom: 9px;
  border-top: 1px solid ${({ theme, accentColor }) =>
    accentColor ? 'transparent' : theme.colors.lightGray};
  width: 100%;
  ${({ accentColor }) => accentColor && highlightCss};

  &:before {
    top: -6px;
  }
`;

export const Delimiter = styled.div`
  width: 100%;
`;
