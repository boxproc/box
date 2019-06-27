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

export const T2 = styled.h2`
  margin-bottom: 15px;
  font-size: 26px;
  font-family: ${({ theme }) => theme.decorateFont};
`;

interface ParagraphProps {
  light?: boolean;
}

export const Paragraph = styled.p<ParagraphProps>`
  font-size: 14px;
  line-height: 1.5;
  color: ${({ theme, light }) => light ? theme.darkGrayColor : theme.blackColor };
  &:not(last-child) {
    margin-bottom: 20px;
  };
`;
