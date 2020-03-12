export interface ThemeProps {
  theme: Theme;
}

export default interface Theme {
  fonts: {
    normal: string,
    decorate: string;
    code: string;
  };
  colors: {
    normalAccent: string;
    lightAccent: string;
    lighterAccent: string;

    black: string;
    blackOpacity: string;

    red: string;

    gray: string;
    lightGray: string;
    lighterGray: string;
    lighterGrayHover: string;
    darkGray: string;

    white: string;
    whiteOpacity: string;
  };
  shadows: {
    normalBox: string;
    bottomBox: string;
    aroundBox: string;
  };
}

export const theme: Theme = {
  fonts: {
    normal: 'Roboto, sans-serif',
    decorate: 'Raleway, sans-serif',
    code: 'Roboto Mono, monospace',
  },
  colors: {
    normalAccent: '#ffa400',
    lightAccent: '#ffbf4d',
    lighterAccent: 'rgba(255, 164, 0, .9)',

    black: '#333333',
    blackOpacity: 'rgba(0, 0, 0, .7)',

    red: '#FF0000',

    gray: '#999999',
    lightGray: '#e6e6e6',
    lighterGray: '#f3f3f3',
    lighterGrayHover: '#f0f0f0',
    darkGray: '#6c6c6c',

    white: '#ffffff',
    whiteOpacity: 'rgba(255, 255, 255, .8)',
  },
  shadows: {
    normalBox: '0 2px 4px 0 rgba(0, 0, 0, .1)',
    bottomBox: '0 3px 3px 0 rgba(0, 0, 0, .1)',
    aroundBox: '0 1px 2px 0 rgba(60, 64, 67, .3), 0 2px 6px 2px rgba(60, 64, 67, .15)',
  },
};
