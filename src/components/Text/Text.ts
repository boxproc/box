import styled from 'theme';

interface ILabel {
  active?: boolean;
  invalid?: boolean;
}

export const Label = styled.label<ILabel>`
  display: block;
  margin-bottom: 5px;
  font-size: 12px;
  color: ${({ theme, invalid }) => invalid
    ? theme.colors.red
    : theme.colors.darkGray};
  }
`;

interface ISmallText {
  accentColor?: boolean;
  bold?: boolean;
  light?: boolean;
}

export const SmallText = styled.div<ISmallText>`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.darkGray};

  ${({ light, theme }) => light && `
    color: ${theme.colors.gray};
    opacity: .7;
  `};

  ${({ accentColor, theme }) => accentColor && `
    color: ${theme.colors.normalAccent};
  `};

  ${({ bold }) => bold && `
    font-weight: 500;
  `};
`;

interface ITitle {
  color?: string;
  textAlign?: string;
}

export const T2 = styled.h2<ITitle>`
  margin-bottom: 7px;
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.decorate};
  text-align: ${({ textAlign }) => textAlign ? textAlign : 'left'};
  text-transform: capitalize;
  color: ${({ theme, color }) => color ? color : theme.colors.darkGray};
`;

export const T3 = styled.h3<ITitle>`
  margin-bottom: 10px;
  font-size: 18px;
  color: ${({ theme, color }) => color ? color : theme.colors.darkGray};
`;

export const T4 = styled.h4<ITitle>`
  margin-bottom: 7px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme, color }) => color ? color : theme.colors.darkGray};
`;

interface IParagraph {
  bold?: boolean;
  light?: boolean;
  monoFontFamily?: boolean;
  size?: number;
  textAlign?: string;
}

export const Paragraph = styled.p<IParagraph>`
  font-size: ${({ size }) => size ? `${size}px` : '14px'};
  line-height: 1.5;
  color: ${({ theme, light }) => light ? theme.colors.darkGray : theme.colors.black};
  text-align: ${({ textAlign }) => textAlign ? textAlign : 'left'};
  font-weight: ${({ bold }) => bold ? 500 : 'normal'};

  &:not(last-child) {
    margin-bottom: 10px;
  };

  ${({ monoFontFamily, theme }) => monoFontFamily && `
    font-family: ${theme.fonts.code};
  `};
`;
