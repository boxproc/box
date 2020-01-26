import React, { ReactChild } from 'react';

import { Box, Flex } from '@rebass/grid';
import { ArrowDropDownIcon } from 'components';

import styled from 'theme';

interface DropdownWrapperProps {
  isActive: boolean;
  isDisabled?: boolean;
  position?: 'left' | 'right' | 'center';
}

const DropdownWrapper = styled.div<DropdownWrapperProps>`
  position: relative;
  display: inline-block;
  user-select: none;

  .dropdown-list {
    position: absolute;
    left: ${({ position }) => position === 'left' ? '-10px' : 'auto'};
    right: ${({ position }) => position === 'right' ? '0' : 'auto'};
    top: calc(100% + 2px);
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.darkGray};
    z-index: 11;

  ${({ position }) => position === 'center' && `
    transform: translateX(-50%);
    margin-left: 50%;
  `};
  }

  .dropdown-option {
    margin: 1px;
    transition: all .1s linear;

    > * {
      padding: 10px 10px 8px;
      width: 100%;
    }

    &:hover {
      background-color: ${({ theme }) => theme.colors.lighterGray};
    }
  }

  .dropdown-toggle-btn {
    display: flex;
    align-items: center;
    cursor: pointer;

    * {
      color: ${({ theme, isActive }) => isActive && theme.colors.normalAccent};
    }

    &:hover * {
      color: ${({ theme }) => theme.colors.normalAccent};
    }
  }

  ${({ isDisabled }) => isDisabled && `
    pointer-events: none;
    opacity: .5;
  `};
`;

const ToggleButton = styled(ArrowDropDownIcon)`
  color: ${({ theme }) => theme.colors.gray};
  transition: all .1s linear;

  &:hover {
    color: ${({ theme }) => theme.colors.normalAccent};
  }
`;

export interface DropdownProps {
  selectable?: boolean;
  dropdownListPosition?: 'left' | 'right' | 'center';
  ToggleButtonComponent?: ReactChild;
  isDisabled?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  selectable = true,
  dropdownListPosition = 'left',
  ToggleButtonComponent,
  isDisabled,
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isOpened, setIsOpened] = React.useState(false);

  const dropdownListRef = React.useRef(null);
  const dropdownToggleBtnRef = React.useRef(null);

  React.useEffect(
    () => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  );

  const handleClickOutside = React.useCallback(
    (e: MouseEvent) => {
      if (isOpened
        && dropdownListRef.current
        && !dropdownListRef.current.contains(e.target)
        && !dropdownToggleBtnRef.current.contains(e.target)
      ) {
        setIsOpened(false);
      }
    },
    [isOpened]
  );

  const toggleOpen = React.useCallback(
    () => setIsOpened(!isOpened),
    [isOpened]
  );

  return (
    <DropdownWrapper
      position={dropdownListPosition}
      isActive={isOpened}
      isDisabled={isDisabled}
    >
      <Flex alignItems="flex-start">
        {selectable && (
          <Box>{children[selectedIndex]}</Box>
        )}
        <Box>
          <div
            className="dropdown-toggle-btn"
            onClick={toggleOpen}
            ref={dropdownToggleBtnRef}
          >
            {ToggleButtonComponent}
            <ToggleButton size="21" />
          </div>
        </Box>
      </Flex>
      {isOpened && (
        <div className="dropdown-list" ref={dropdownListRef}>
          {React.Children.map(children, (child, i) => {
            if (!child) {
              return null;
            }

            const handleClick = () => {
              setIsOpened(false);
              setSelectedIndex(i);
            };

            return (
              <div
                className="dropdown-option"
                onClick={handleClick}
              >
                {child}
              </div>
            );
          })}
        </div>
      )}
    </DropdownWrapper>
  );
};

export const DropdownOption: React.FC = ({
  children,
}) => {
  return (
    <React.Fragment>{children}</React.Fragment>
  );
};
