import styled from 'theme';
import { highlightCss } from 'theme/highlightCss';

interface HrProps {
  accentColor?: boolean;
  noSpace?: boolean;
}

export const Hr = styled.div<HrProps>`
  margin-top: ${({ noSpace }) => noSpace ? '1px' : '10px'};
  margin-bottom:${({ noSpace }) => noSpace ? '0' : '8px'};;
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
