import React, { ReactChild } from 'react';

import { Box, Flex } from '@rebass/grid';
import styled from 'theme';

import { ChevronDownIcon, Hr } from 'components';

interface CollapseButtonProps {
  isOpen: boolean;
}

const CollapseButton = styled(ChevronDownIcon)<CollapseButtonProps>`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray};
  transition: all .1s linear;

  ${({ isOpen }) => isOpen && `
    transform: rotate(-180deg);
  `}

  &:hover {
    color: ${({ theme }) => theme.colors.normalAccent};
  }
`;

const CollapseHeader = styled.div`
  .header {
    z-index: 11;
  }
`;

interface CollapseProps {
  header?: ReactChild;
  additionalTool?: ReactChild;
}

const Collapse: React.FC<CollapseProps> = ({
  children,
  header,
  additionalTool,
}) => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <div>
      <CollapseHeader>
        <Flex
          justifyContent="space-between"
          alignItems="center"
        >
          {header && (
            <div className="header">{header}</div>
          )}
          <Flex alignItems="flex-end">
            {additionalTool && (
              <Box mb="4px">{additionalTool}</Box>
            )}
            <Box mb="3px">
              <CollapseButton
                size="24"
                className="icon"
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
              />
            </Box>
          </Flex>
        </Flex>
      </CollapseHeader>
      {isOpen && (
        <React.Fragment>{children}</React.Fragment>
      )}
      {!isOpen && (
        <Hr noSpace={true} />
      )}
    </div>
  );
};

export default Collapse;
