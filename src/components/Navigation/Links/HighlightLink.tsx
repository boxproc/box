import React from 'react';

import styled from 'theme';

interface HighlightLinkProps {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

interface LinkProps {
  isActive?: boolean;
}

const Link = styled.span<LinkProps>`
  color: ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme, isActive }) =>
    isActive ? theme.colors.lightAccent : theme.colors.lightGray};
  line-height: 1.4;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.lighterAccent};
  }
`;

const HighlightLink: React.FC<HighlightLinkProps> = ({
  text,
  isActive,
  onClick,
}) => {
  return (
    <Link
      isActive={isActive}
      onClick={onClick}
    >
      {text}
    </Link>
  );
};

export default HighlightLink;
