import { css } from 'theme';
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

export const staticGrayStyle = css<IconColorProps>`
  :hover ${({ el = 'path' }) => el} {
    stroke: ${({ hover, theme }) => hover || theme.blackColor }};
  }

  ${({el = 'path'}) => el} {
    stroke: ${({ color, theme }) => color || theme.grayColor}};
  }
`;
