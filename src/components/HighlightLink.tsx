import React from 'react';

import styled from 'styled-components';
import { LogOut } from 'styled-icons/feather/LogOut';

import { Box, Flex  } from '@rebass/grid';

interface HighlightLinkProps {
  text: string;
  isActive?: boolean;
  iconName?: 'logOut';
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

const LogOutIcon = styled(LogOut)`
  color: ${({ theme }) => theme.blackColorOpacity5};
`;

const renderIcon = (name: string) => {
  switch (name) {
    case 'logOut':
      return <LogOutIcon size="16"/>;
    default:
      return null;
  }
};

const HighlightLink: React.FC<HighlightLinkProps> = ({
  text,
  isActive,
  onClick,
  iconName,
}) => {
  return (
    <Flex alignItems="center">
      {iconName &&
        <Box mr="3px" mt="-2px">{renderIcon(iconName)}</Box>
      }
      <Link isActive={isActive} onClick={onClick}>{text}</Link>
    </Flex>
  );
};

export default HighlightLink;
