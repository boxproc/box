export interface ThemeProps {
  theme: Theme;
}

export default interface Theme {
  fonts: {
    code: string;
    decorate: string;
    normal: string,
  };
  colors: {
    lightAccent: string;
    lighterAccent: string;
    normalAccent: string;

    black: string;
    blackOpacity: string;

    red: string;

    darkGray: string;
    gray: string;
    lighterGray: string;
    lighterGrayCell: string;
    lighterGrayHover: string;
    lightGray: string;

    white: string;
    whiteOpacity: string;
  };
  shadows: {
    aroundBox: string;
    bottomBox: string;
    normalBox: string;
  };
}

export const theme: Theme = {
  fonts: {
    code: 'Roboto Mono, monospace',
    decorate: 'Raleway, sans-serif',
    normal: 'Roboto, sans-serif',
  },
  colors: {
    lightAccent: '#ffbf4d',
    lighterAccent: 'rgba(255, 164, 0, .9)',
    normalAccent: '#ffa400',

    black: '#333333',
    blackOpacity: 'rgba(0, 0, 0, .7)',

    red: '#FF0000',

    darkGray: '#6c6c6c',
    gray: '#999999',
    lighterGray: '#f3f3f3',
    lighterGrayCell: '#fafafa',
    lighterGrayHover: '#f0f0f0',
    lightGray: '#e6e6e6',

    white: '#ffffff',
    whiteOpacity: 'rgba(255, 255, 255, .8)',
  },
  shadows: {
    aroundBox: '0 1px 2px 0 rgba(60, 64, 67, .3), 0 2px 6px 2px rgba(60, 64, 67, .15)',
    bottomBox: '0 3px 3px 0 rgba(0, 0, 0, .1)',
    normalBox: '0 2px 4px 0 rgba(0, 0, 0, .1)',
  },
};
