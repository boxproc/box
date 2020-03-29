import styled from 'theme';
import { highlightCss } from 'theme/styles';

interface IHr {
  accentColor?: boolean;
  noSpace?: boolean;
}

export const Hr = styled.div<IHr>`
  margin-top: ${({ noSpace }) => noSpace ? '1px' : '9px'};
  margin-bottom:${({ noSpace }) => noSpace ? '0' : '7px'};
  padding: 1px 0;
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
