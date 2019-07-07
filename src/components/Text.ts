import styled from 'theme';

interface LabelProps {
  active?: boolean;
  invalid?: boolean;
}

export const Label = styled.label<LabelProps>`
  font-size: 12px;
  color: ${({ theme, invalid }) => invalid
    ? theme.redColor
    : theme.blackColor};
  }
`;

interface TitleProps {
  textAlign?: string;
}

export const T2 = styled.h2<TitleProps>`
  margin-bottom: 15px;
  font-size: 22px;
  font-family: ${({ theme }) => theme.decorateFont};
  text-align: ${({ textAlign }) => textAlign ? textAlign : 'left'};
  text-transform: capitalize;
`;

interface ParagraphProps {
  light?: boolean;
  textAlign?: string;
}

export const Paragraph = styled.p<ParagraphProps>`
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme, light }) => light ? theme.darkGrayColor : theme.blackColor };
  text-align: ${({ textAlign }) => textAlign ? textAlign : 'left'};
  &:not(last-child) {
    margin-bottom: 10px;
  };
`;
