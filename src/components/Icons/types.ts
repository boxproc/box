import ITheme from 'theme/theme';

export interface IIconColor {
  className?: string;
  color?: string;
  css?: string;
  el?: string;
  hover?: string;
  onClick?: (e?: React.MouseEvent<SVGElement>) => void;
  theme?: ITheme;
}
