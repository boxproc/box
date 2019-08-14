import React, { ReactChild } from 'react';

import { Box, Flex } from '@rebass/grid';

import styled from 'styled-components';

import { ArrowDropDown } from 'styled-icons/material/ArrowDropDown';

interface DropdownWrapperProps {
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
    background-color: ${({ theme }) => theme.whiteColor};
    border: 1px solid ${({ theme }) => theme.darkGrayColor};
    z-index: 1;
  }

  .dropdown-option {
    padding: 10px 10px 8px;
    margin: 1px;

    &:hover {
      background-color: ${({ theme }) => theme.lighterGrayColor};
    }
  }

  .dropdown-toggle-btn {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;

interface ToggleButtonProps {
  isAccentColor?: boolean;
}

const ToggleButton = styled(ArrowDropDown)<ToggleButtonProps>`
  color: ${({ theme, isAccentColor }) =>
    isAccentColor ? theme.normalAccentColor : theme.grayColor};
  padding-top: 1px;

  &:hover {
    color: ${({ theme }) => theme.normalAccentColor};
  }
`;

export interface DropdownProps {
  selectable?: boolean;
  dropdownListPosition?: 'left' | 'right';
  ToggleButtonComponent?: ReactChild;
  isAccentColorIcon?: boolean;
}

export const Dropdown: React.FC<DropdownProps> = ({
  children,
  selectable = true,
  dropdownListPosition = 'left',
  ToggleButtonComponent,
  isAccentColorIcon = false,
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
            {ToggleButtonComponent && ToggleButtonComponent}
            <ToggleButton
              size="23"
              isAccentColor={isAccentColorIcon}
            />
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

export const Option: React.FC = ({
  children,
}) => {
  return (
    <React.Fragment>{children}</React.Fragment>
  );
};
