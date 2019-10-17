import React, { ReactChild } from 'react';

import { Flex } from '@rebass/grid';
import styled from 'theme';

import { ChevronDownIcon } from 'components';

const CollapseIcon = styled(ChevronDownIcon)``;

interface CollapseButtonProps {
  isOpen: boolean;
}

const CollapseButton = styled.div<CollapseButtonProps>`
  cursor: pointer;

  .title {
    z-index: 11;
  }

  .icon {
    color: ${({ theme }) => theme.colors.gray};
  }

  ${({ isOpen }) => isOpen && `
    .icon {
      transform: rotate(180deg);
    }
  `}

  ${({ theme, isOpen }) => !isOpen && `
    border-bottom: 1px solid ${theme.colors.lightGray};

    &:hover {
      border-bottom-color: ${theme.colors.lightAccent};
    }
  `}

  &:hover {
    .icon {
      color: ${({ theme }) => theme.colors.normalAccent};
    }
  }
`;

interface CollapseProps {
  title?: ReactChild;
}

const Collapse: React.FC<CollapseProps> = ({
  children,
  title,
}) => {
  const [isOpen, setIsOpen] = React.useState(true);
  return (
    <div>
      <CollapseButton
        onClick={() => setIsOpen(!isOpen)}
        isOpen={isOpen}
      >
        <Flex
          justifyContent="space-between"
          alignItems="center"
        >
          {title && (
            <div className="title">{title}</div>
          )}
          <CollapseIcon
            size="24"
            className="icon"
          />
        </Flex>
      </CollapseButton>
      {isOpen && (
        <React.Fragment>{children}</React.Fragment>
      )}
    </div>
  );
};

export default Collapse;
