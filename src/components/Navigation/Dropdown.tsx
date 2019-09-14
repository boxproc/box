import React, { ReactChild } from 'react';

import { Box, Flex } from '@rebass/grid';
import { ArrowDropDown } from 'styled-icons/material/ArrowDropDown';

import styled from 'theme';

interface DropdownWrapperProps {
  isActive: boolean;
  position?: 'left' | 'right';
}

const DropdownWrapper = styled.div<DropdownWrapperProps>`
  position: relative;
  display: inline-block;

  .dropdown-list {
    position: absolute;
    left: ${({ position }) => position === 'left' ? '-10px' : 'auto'};
    right: ${({ position }) => position === 'right' ? '0' : 'auto'};
    top: calc(100% + 3px);
    background-color: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.darkGray};
    z-index: 1;
  }

  .dropdown-option {
    margin: 1px;

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
      color: ${({ theme, isActive }) => isActive && theme.colors.normalAccent}
    }

    &:hover * {
      color: ${({ theme }) => theme.colors.normalAccent};
    }
  }
`;

const ToggleButton = styled(ArrowDropDown)`
  color: ${({ theme }) => theme.colors.gray};

  &:hover {
    color: ${({ theme }) => theme.colors.normalAccent};
  }
`;

export interface DropdownProps {
  selectable?: boolean;
  dropdownListPosition?: 'left' | 'right';
  ToggleButtonComponent?: ReactChild;
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  selectable = true,
  dropdownListPosition = 'left',
  ToggleButtonComponent,
}) => {
  const dropdownListRef = React.useRef(null);
  const dropdownToggleBtnRef = React.useRef(null);

  React.useEffect(
    () => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  );
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [isOpened, setIsOpened] = React.useState(false);

  const handleClickOutside = (e: MouseEvent) => {
    if (isOpened
      && dropdownListRef.current
      && !dropdownListRef.current.contains(e.target)
      && !dropdownToggleBtnRef.current.contains(e.target)
    ) {
      setIsOpened(false);
    }
  };

  const toggleOpen = () => setIsOpened(!isOpened);

  return (
    <DropdownWrapper
      position={dropdownListPosition}
      isActive={isOpened}
    >
      <Flex alignItems="center">
        {selectable && (
          <Box>
            {children[selectedIndex]}
          </Box>
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
            return (
              <div
                className="dropdown-option"
                onClick={() => {
                  setIsOpened(false);
                  setSelectedIndex(i);
                }}
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
