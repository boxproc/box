import ThemeProps from 'theme/theme';

export interface IconColorProps {
  className?: string;
  color?: string;
  css?: string;
  el?: string;
  hover?: string;
  onClick?: (e?: React.MouseEvent<SVGElement>) => void;
  theme?: ThemeProps;
}
