import styled from 'theme';

interface LabelProps {
  invalid?: boolean;
}

export const Label = styled.label<LabelProps>`
  font-size: 12px;
  color: ${({ theme, invalid }) => invalid
    ? theme.redColor
    : theme.blackColor};
  }
`;
