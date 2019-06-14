import styled from 'theme';

interface LabelProps {
  active?: boolean;
  invalid?: boolean;
}

export const Label = styled.label<LabelProps>`
  font-size: 12px;
  color: ${({ theme, active, invalid }) => invalid
    ? theme.redColor
    : active
      ? theme.blackColor
      : theme.grayColor};
  }
`;
