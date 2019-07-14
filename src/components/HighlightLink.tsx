import React from 'react';

import styled from 'styled-components';

interface HighlightLinkProps {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

interface LinkProps {
  isActive?: boolean;
}

const Link = styled.div<LinkProps>`
  color: ${({ theme }) => theme.blackColor};
  border-bottom: 1px solid ${({ theme, isActive }) =>
    isActive ? theme.lightAccentColor : theme.lightGrayColor};
  line-height: 1.4;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    border-bottom-color: ${({ theme }) => theme.lighterAccentColor};
  }
`;

const HighlightLink: React.FC<HighlightLinkProps> = ({
  text,
  isActive,
  onClick,
}) => {
  return (
    <Link isActive={isActive} onClick={onClick}>{text}</Link>
  );
};

export default HighlightLink;
