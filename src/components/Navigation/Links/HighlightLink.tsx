import React from 'react';

import styled from 'theme';

interface HighlightLinkProps {
  text: string;
  isActive?: boolean;
  fontSize?: string;
  onClick?: () => void;
}

interface LinkProps {
  isActive?: boolean;
  fontSize?: string;
}

const Link = styled.span<LinkProps>`
  color: ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme, isActive }) =>
    isActive ? theme.colors.lightAccent : theme.colors.lightGray};
  line-height: 1.4;
  font-size: ${({ fontSize }) => fontSize ? fontSize : '12px'};
  cursor: pointer;
  transition: all .1s linear;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.normalAccent};
  }
`;

const HighlightLink: React.FC<HighlightLinkProps> = ({
  text,
  fontSize,
  isActive,
  onClick,
}) => {
  return (
    <Link
      isActive={isActive}
      fontSize={fontSize}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default HighlightLink;
