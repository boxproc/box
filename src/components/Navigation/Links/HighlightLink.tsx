import React from 'react';

import styled from 'theme';

interface ILink {
  fontSize?: string;
  isActive?: boolean;
}

const Link = styled.span<ILink>`
  color: ${({ theme }) => theme.colors.gray};
  border-bottom: 1px solid ${({ theme, isActive }) =>
    isActive ? theme.colors.lightAccent : theme.colors.lightGray};
  line-height: 1.4;
  font-size: ${({ fontSize }) => fontSize || '12px'};
  cursor: pointer;
  transition: all .1s linear;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.colors.normalAccent};
  }
`;

interface IHighlightLink {
  fontSize?: string;
  isActive?: boolean;
  onClick?: () => void;
  text: string;
}

const HighlightLink: React.FC<IHighlightLink> = ({
  fontSize,
  isActive,
  onClick,
  text,
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
